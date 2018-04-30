<!-- 

.accessible-header {
    background-color: #fff;
    // The red bar at the top
    &::before {
        display: block;
        height: $spacing-third;
        content: "";
        background-image: linear-gradient(to right, $brand-color, $brand-color);
        width: 100%;
    }
}



Logo text converted from SVG to base64 string 
.site-logo {
    margin-top: 0.5em;
    margin-right: auto;
    width: 1.375em*5.9;
    height: 1.375em;
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4My4yIDE0LjEiPjxwYXRoIGQ9Ik01LjQgNS4yTDIuOSA0LjVDMi41IDQuMyAyLjEgNC4xIDEuOCAzLjggMS41IDMuNSAxLjMgMy4xIDEuMyAyLjdjMC0wLjUgMC4yLTAuOSAwLjYtMS4yIDAuNC0wLjQgMS0wLjUgMS43LTAuNSAwLjUgMCAxIDAuMSAxLjUgMC4zUzYgMS43IDYuMiAyTDcgMS41Yy0wLjQtMC40LTAuOC0wLjgtMS40LTFDNS4xIDAuMSA0LjQgMCAzLjcgMGMtMSAwLTEuOCAwLjMtMi40IDAuOEMwLjcgMS4zIDAuNCAxLjkgMC40IDIuN2MwIDAuNiAwLjIgMS4yIDAuNiAxLjdzMSAwLjggMS43IDFMNSA2YzAuNSAwLjEgMC44IDAuMyAxLjEgMC42QzYuNCA3IDYuNSA3LjMgNi41IDcuN2MwIDAuNS0wLjIgMC45LTAuNyAxLjMgLTAuNCAwLjQtMS4xIDAuNi0yIDAuNiAtMC42IDAtMS4xLTAuMS0xLjctMC40IC0wLjYtMC4zLTEtMC43LTEuNC0xLjNMMCA4LjRDMC40IDkgMC45IDkuNSAxLjYgOS45YzAuNyAwLjQgMS40IDAuNiAyLjMgMC42IDEuMSAwIDItMC4zIDIuNi0wLjggMC42LTAuNSAwLjktMS4yIDAuOS0xLjkgMC0wLjctMC4yLTEuMi0wLjYtMS43QzYuNSA1LjcgNiA1LjMgNS40IDUuMnoiLz48cmVjdCB4PSI5LjQiIHk9IjIuNCIgd2lkdGg9IjAuOSIgaGVpZ2h0PSI3LjgiLz48cmVjdCB4PSI5LjQiIHdpZHRoPSIwLjkiIGhlaWdodD0iMS4yIi8+PHBhdGggZD0iTTE2LjMgMi4xYy0xIDAtMS45IDAuNC0yLjcgMS4xVjIuNGgtMC45djcuOGgwLjlWNC43YzAuMS0wLjMgMC4zLTAuNiAwLjYtMC44QzE0LjcgMy4zIDE1LjQgMyAxNi4zIDNzMS41IDAuMyAyLjEgMC45QzE5IDQuNSAxOS4zIDUuMiAxOS4zIDZ2NC4yaDAuOVY2YzAtMS4xLTAuNC0yLTEuMS0yLjhDMTguMyAyLjUgMTcuMyAyLjEgMTYuMyAyLjF6Ii8+PHBhdGggZD0iTTI1LjkgM2MwLjkgMCAxLjcgMC4zIDIuMyAxIDAuMSAwLjEgMC4yIDAuMiAwLjIgMC4zbDAuNy0wLjZjLTAuMS0wLjEtMC4yLTAuMi0wLjMtMC4zIC0wLjgtMC44LTEuOC0xLjItMy0xLjIgLTEuMiAwLTIuMSAwLjQtMyAxLjIgLTAuOCAwLjgtMS4yIDEuOC0xLjIgMyAwIDEuMiAwLjQgMi4yIDEuMiAzIDAuOCAwLjggMS44IDEuMiAzIDEuMiAxLjIgMCAyLjItMC40IDMtMS4yQzI4LjkgOS4yIDI5IDkuMSAyOS4xIDlsLTAuNy0wLjZjLTAuMSAwLjEtMC4xIDAuMi0wLjIgMC4zIC0wLjYgMC42LTEuNCAxLTIuMyAxIC0wLjkgMC0xLjctMC4zLTIuMy0xIC0wLjYtMC42LTEtMS40LTEtMi4zIDAtMC45IDAuMy0xLjcgMS0yLjNTMjQuOSAzIDI1LjkgM3oiLz48cGF0aCBkPSJNMzcuNSAzLjNjLTAuOC0wLjgtMS44LTEuMi0zLTEuMiAtMS4yIDAtMi4xIDAuNC0zIDEuMiAtMC44IDAuOC0xLjIgMS44LTEuMiAzIDAgMS4yIDAuNCAyLjIgMS4yIDMgMC44IDAuOCAxLjggMS4yIDMgMS4yIDEuMiAwIDIuMi0wLjQgMy0xLjJsLTAuNi0wLjZjLTAuNiAwLjYtMS40IDEtMi4zIDEgLTAuOCAwLTEuNC0wLjItMi0wLjdsNS4zLTUuM0MzNy43IDMuNiAzNy42IDMuNCAzNy41IDMuM3pNMzEuOSA4LjNjLTAuNC0wLjYtMC43LTEuMi0wLjctMiAwLTAuOSAwLjMtMS43IDEtMi4zczEuNC0xIDIuMy0xYzAuOCAwIDEuNCAwLjIgMiAwLjdMMzEuOSA4LjN6Ii8+PHBhdGggZD0iTTQwLjYgMi40aC0wLjl2Ny44aDAuOVY0LjdjMC4xLTAuMyAwLjMtMC42IDAuNi0wLjhDNDEuNyAzLjMgNDIuNCAzIDQzLjMgM1YyLjFjLTEgMC0xLjkgMC40LTIuNyAxLjFWMi40eiIvPjxwYXRoIGQ9Ik01MC43IDMuM2MtMC44LTAuOC0xLjgtMS4yLTMtMS4ycy0yLjEgMC40LTMgMS4yYy0wLjggMC44LTEuMiAxLjgtMS4yIDMgMCAxLjIgMC40IDIuMiAxLjIgM3MxLjggMS4yIDMgMS4yIDIuMi0wLjQgMy0xLjJsLTAuNi0wLjZjLTAuNiAwLjYtMS40IDEtMi4zIDEgLTAuOCAwLTEuNC0wLjItMi0wLjdMNTEgMy43QzUwLjkgMy42IDUwLjggMy40IDUwLjcgMy4zek00NS4xIDguM2MtMC40LTAuNi0wLjctMS4yLTAuNy0yIDAtMC45IDAuMy0xLjcgMS0yLjMgMC42LTAuNiAxLjQtMSAyLjMtMSAwLjggMCAxLjQgMC4yIDIgMC43TDQ1LjEgOC4zeiIvPjxyZWN0IHg9IjUyLjkiIHk9IjAuMyIgd2lkdGg9IjAuOSIgaGVpZ2h0PSI5LjkiLz48cGF0aCBkPSJNNjIuNSA3LjljLTAuMSAwLjMtMC4zIDAuNi0wLjYgMC44IC0wLjYgMC42LTEuMyAwLjktMi4xIDAuOXMtMS41LTAuMy0yLjEtMC45IC0wLjktMS4zLTAuOS0yLjFWMi40aC0wLjl2NC4yYzAgMS4xIDAuNCAyIDEuMSAyLjhzMS43IDEuMSAyLjggMS4xYzEgMCAxLjktMC40IDIuNy0xLjF2MC44YzAgMC44LTAuMyAxLjUtMC45IDIuMXMtMS4zIDAuOS0yLjEgMC45djAuOWMxLjEgMCAyLTAuNCAyLjgtMS4xczEuMS0xLjcgMS4xLTIuOFYyLjRoLTAuOVY3Ljl6Ii8+PHBhdGggZD0iTTc1LjIgMGMtMS41IDAtMi43IDAuNS0zLjcgMS41IC0xIDEtMS41IDIuMy0xLjUgMy43IDAgMS41IDAuNSAyLjcgMS41IDMuNyAxIDEgMi4zIDEuNSAzLjcgMS41IDEuNCAwIDIuNy0wLjUgMy43LTEuNSAxLTEgMS41LTIuMyAxLjUtMy43IDAtMS40LTAuNS0yLjctMS41LTMuN0M3Ny45IDAuNSA3Ni43IDAgNzUuMiAwek03OC4zIDguM2MtMC44IDAuOC0xLjkgMS4zLTMuMSAxLjMgLTEuMiAwLTIuMi0wLjQtMy4xLTEuMyAtMC44LTAuOC0xLjMtMS45LTEuMy0zLjEgMC0xLjIgMC40LTIuMiAxLjMtMy4xQzczIDEuMyA3NCAwLjkgNzUuMiAwLjljMS4yIDAgMi4yIDAuNCAzLjEgMS4zQzc5LjEgMyA3OS42IDQgNzkuNiA1LjIgNzkuNiA2LjUgNzkuMSA3LjUgNzguMyA4LjN6Ii8+PHJlY3QgeD0iODIuMyIgeT0iMi40IiB3aWR0aD0iMC45IiBoZWlnaHQ9IjcuOCIvPjxyZWN0IHg9IjgyLjMiIHdpZHRoPSIwLjkiIGhlaWdodD0iMS4yIi8+PC9zdmc+) no-repeat center center;
}
*/ -->

<!-- Gulpfile image resizing task

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

-->

<!-- Recipe excerpts 

<header class="introduction">
                <h2 class="introduction__title">Latest Thai dishes to enjoy at home:</h2> 
                <p class="introduction__subtitle">Free and step-by-step recipes with clear instructions.</p>
                <a class="introduction__link" href="/thai-recipes/">Browse all Thai Recipes »</a>
            </header>

            <section class="cards">
                {{ range first 3 (where .Data.Pages "Type" "thai-recipes") }}
                    <article class="card">
                        <img class="card__image lazyload" data-src="{{ .Params.featured_image }}">
                        <div class="card__content">
                            <h3 class="card__header">{{ .Title }}</h3>
                            <time class="card__time" datetime="{{.Date.Format " 2006-01-02 "}}">{{.Date.Format "Jan 2, 2006"}}</time>
                            <p class="card__description">{{ .Params.description }}</p>
                            <a class="card__link" href="{{.Permalink}}">Read this recipe »</a>
                        </div>
                    </article>
                {{ end }}
            </section>


-->

<!-- This is the old homepage 3x card layout
<header class="introduction">
            <h2 class="introduction__title">Cook incredible Thai food at home:</h2> 
            <p class="introduction__subtitle">Learn with best-selling author Oi Cheepchaiissara.</p>
        </header>

        <section class="cards cards--layout-home">
                <article class="card">
                    <img class="card__image lazyload" data-src="/img/pad-thai-noodles-with-prawns.jpg">
                    <div class="card__content">
                        <h3 class="card__header">Read Thai Recipes</h3>
                        <p class="card__description">Simple and step-by-step recipes to cook beautiful Thai meals at home.</p>
                        <a class="card__link" href="/thai-recipes/">Browse Thai Recipes »</a>
                    </div>
                </article>

                <article class="card">
                    <img class="card__image lazyload" data-src="/img/oi-plating-up.jpg">
                    <div class="card__content">
                        <h3 class="card__header">Join my Colchester Cooking Classes</h3>
                        <p class="card__description">Cook a full course Thai meal in a fun "hands-on" group cooking class.</p>
                        <a class="card__link" href="/colchester-cooking-classes/">See 2018 classes »</a>
                    </div>
                </article>

                <article class="card">
                    <img class="card__image lazyload" data-src="/img/oi-and-thai-food-secrets-books.jpg">
                    <div class="card__content">
                        <h3 class="card__header">Browse my eBooks shop</h3>
                        <p class="card__description">Expand your Thai cooking knowledge with cookbooks covering every area of Thai cooking!</p>
                        <a class="card__link" href="/shop/">Browse the shop »</a>
                    </div>
                </article>

        </section>
        -->


<!--
        {{ define "main" }}
    <main class="page-layout page-layout--home" role="main" id="main">

            <section class="cards">
                <article class="card card--feature">
                    <img class="card__image card__image--feature lazyload" data-src="/img/oi/oi-tastes-good.jpg">
                    <div class="card__content">
                        <h1 class="card__header">Learn everything there is to know about Thai cooking with Oi!</h1>
                        <ul class="card__menu">
                            <li class="card__bullet">Step-by-step recipes that lead you every step of the way.</li>
                            <li class="card__bullet">Lots of illustrations to see whether you're on the right track.</li>
                            <li class="card__bullet">Interesting insights including healthy tips and variations.</li>
                        </ul>
                        <a class="card__button" href="/thai-recipes/">Read Free Thai Recipes →</a>
                    </div>
                </article>
            </section>                     

            <section class="cards">
                <header class="introduction">
                <h2 class="introduction__title">Latest delicious Thai dishes with step-by-step recipes:</h2> 
                <a class="introduction__link" href="/thai-recipes/">See all my Thai Recipes →</a>
            </header>
                {{ range first 3 (where .Data.Pages "Type" "thai-recipes") }}
                    <article class="card">
                        <img class="card__image lazyload" data-src="{{ .Params.featured_image }}">
                        <div class="card__content">
                            <h3 class="card__header">{{ .Title }}</h3>
                            <time class="card__time" datetime="{{.Date.Format " 2006-01-02 "}}">{{.Date.Format "Jan 2, 2006"}}</time>
                            <p class="card__description">{{ .Params.description }}</p>
                            <a class="card__link button" href="{{.Permalink}}">Read this recipe →</a>
                        </div>
                    </article>
                {{ end }}
            </section>

            <aside class="as-seen-on">
                <header class="introduction">
                    <h2 class="introduction__title">Find my cookbooks in stores and available on my website :)</h2> 
                    <a class="introduction__link" href="/shop/">Visit my online shop →</a>
                </header>
                <div class="as-seen-on__items">
                    <div class="as-seen-on__item">
                        <img class="lazyload" data-src="/img/books/books-200-thai-favourites.jpg">
                    </div>
                    <div class="as-seen-on__item">
                        <img class="lazyload" data-src="/img/books/books-the-food-of-thailand.jpg">
                    </div>
                    <div class="as-seen-on__item">
                        <img class="lazyload" data-src="/img/books/books-fresh-thai-low-res.jpg">
                    </div>

                </div>
            </aside>    

    </main>
{{ end }} 

-->