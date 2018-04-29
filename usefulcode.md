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