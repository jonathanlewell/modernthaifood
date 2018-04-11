import gulp from "gulp";
import {spawn} from "child_process";
import hugoBin from "hugo-bin";
import gutil from "gulp-util";
import imagemin from "gulp-imagemin";
import mozjpeg from "imagemin-mozjpeg";
import svgSprite from "gulp-svg-sprite";
import flatten from "gulp-flatten";
import postcss from "gulp-postcss";
import cssImport from "postcss-import";
import cssnext from "postcss-cssnext";
import BrowserSync from "browser-sync";
import watch from "gulp-watch";
import webpack from "webpack";
import webpackConfig from "./webpack.conf";
import autoprefixer from "autoprefixer";
import sass from "gulp-sass";
import cssNano from "gulp-cssnano";
import responsive from "gulp-responsive";
import del from "del";

const browserSync = BrowserSync.create();

// Hugo arguments
const hugoArgsDefault = ["-d", "../dist", "-s", "site", "-v"];
const hugoArgsPreview = ["--buildDrafts", "--buildFuture"];

// Development tasks
gulp.task("hugo", (cb) => buildSite(cb));
gulp.task("hugo-preview", (cb) => buildSite(cb, hugoArgsPreview));

// Build/production tasks
gulp.task("build", ["fonts", "scss", "js", "img:build", "svg"], (cb) => buildSite(cb, [], "production"));
gulp.task("build-preview", ["fonts", "scss", "js"], (cb) => buildSite(cb, hugoArgsPreview, "production"));

// Compile SCSS
gulp.task("scss", () => (
  gulp.src("./src/scss/*.scss")
    .pipe(sass({
      outputStyle:  "nested",
      precision: 10,
      includePaths: ["node_modules"],
    }))
    .pipe(postcss([ autoprefixer() ]))
    .pipe(cssNano())
    .pipe(gulp.dest("./site/static/css"))
    .pipe(browserSync.stream())
));    

// Compile Javascript
gulp.task("js", (cb) => {
  const myConfig = Object.assign({}, webpackConfig);

  webpack(myConfig, (err, stats) => {
    if (err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString({
      colors: true,
      progress: true
    }));
    browserSync.reload();
    cb();
  });
});

// Image tasks from Adamwills
gulp.task("img", () =>
  gulp.src("./src/img/**.*")
    // Resize images (use with <img> shortcode in hugo)
    .pipe(responsive({
      "*": [{
        width: 300,
        rename: { suffix: '-300w' },
      }, {
        width: 600,
        rename: { suffix: '-600w' },
      }, {
        width: 700,
      }, {
        width: 900,
        rename: { suffix: '-900w'},
      }],
    }, {
      silent: true,              // Don't spam the console
      withoutEnlargement: false, // Allow image enlargement
    }))
    .pipe(gulp.dest("./dist/img")
));

gulp.task("img:build", ["img"], () =>
  gulp.src(["./dist/img/*.{jpg,png,gif,svg}"])
    // Optimise images
    .pipe(imagemin([
      imagemin.gifsicle(),
      imagemin.optipng(),
      imagemin.svgo(),
      mozjpeg(),
    ]))
    .pipe(gulp.dest("./dist/img"))
);


// Move all fonts in a flattened directory
gulp.task('fonts', () => (
  gulp.src("./src/fonts/**/*")
    .pipe(flatten())
    .pipe(gulp.dest("./dist/fonts"))
    .pipe(browserSync.stream())
));

// Compile SVG icons into a single partial file
gulp.task("svg", () =>
  gulp.src("src/svg/*.svg")
    .pipe(svgSprite({
      mode: {
        inline: true,
        symbol: true
      },
      svg: {
        xmlDeclaration: false,
      }
    }))
    .pipe(gulp.dest("./site/layouts/partials"))
);

// Development server with browsersync
gulp.task("server", ["hugo", "scss", "js", "fonts", "img"], () => {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });
  gulp.watch("./src/js/**/*.js", ["js"]);
  gulp.watch("./src/scss/**/*.scss", ["scss"]);
  gulp.watch("./src/fonts/**/*", ["fonts"]);
  gulp.watch("./site/**/*", ["hugo"]);
});

/**
 * Run hugo and build the site
 */
function buildSite(cb, options, environment = "development") {
  const args = options ? hugoArgsDefault.concat(options) : hugoArgsDefault;

  process.env.NODE_ENV = environment;

  return spawn(hugoBin, args, {stdio: "inherit"}).on("close", (code) => {
    if (code === 0) {
      browserSync.reload();
      cb();
    } else {
      browserSync.notify("Hugo build failed :(");
      cb("Hugo build failed");
    }
  });
}