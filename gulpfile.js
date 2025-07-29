let project_folder = "dist";
let source_folder = "#src";

let path = {
    build: {
        html: project_folder + "/",
        css: project_folder + "/css/",
        js: project_folder + "/js/",
        img: project_folder + "/img/",
        fonts: project_folder + "/fonts/",
    },
    src: {
        html: [source_folder + "/*.html", "!" + source_folder + "/_*.html"],
        css: source_folder + "/scss/style.scss",
        js: [source_folder + "/js/scripts.js", source_folder + "/js/pluginSearchInput.js", source_folder + "/js/pluginSelect.js", source_folder + "/js/ads.js", source_folder + "/js/request.js", source_folder + "/js/mymassages.js"],
        img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
        fonts: source_folder + "/fonts/*.ttf",
    },
    watch: {
        html: source_folder + "/**/*.html",
        css: source_folder + "/scss/**/*.scss",
        js: source_folder + "/js/**/*.js",
        img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}"
    },
    clean: "./" + project_folder + "/"
}

let { src, dest } = require('gulp'),
    gulp = require('gulp'),
    browsersync = require('browser-sync').create(),
    fileinclude = require('gulp-file-include'), 
    del = require('del'), // Удаление папок и файлов
    scss = require('gulp-sass')(require('sass')), // Переводим scss в css
    autoprefixer = require('gulp-autoprefixer'), // Префиксы для браузеров
    group_media = require('gulp-group-css-media-queries'), // Группировка медиа запросов
    clean_css = require('gulp-clean-css'), // Оптимизация css
    rename = require('gulp-rename'), // Переименовывает файлы
    uglify = require('gulp-uglify-es').default, // Подключаем пакет для сжатия JS
    imagemin = require('gulp-imagemin'), // Сжимаем изображения
    webp = require('gulp-webp'), // Конвертирует изображения в webp
    webpHTML = require('gulp-webp-html'), // Конвертирует HTML в WebP
    webpcss = require('gulp-webpcss'), // Конвертирует CSS в WebP
    svgSprite = require('gulp-svg-sprite'), // Создает SVG спрайт
    ttf2woff = require('gulp-ttf2woff'), // Конвертирует шрифты в woff
    ttf2woff2 = require('gulp-ttf2woff2'); // Конвертирует шрифты в woff2

function browserSync(params) {
    browsersync.init({
        server: {
            baseDir: "./" + project_folder + "/"
        },
        port: 3000,
        notify: false
    })
}

function html() {
    return src(path.src.html)
        .pipe(fileinclude())
        //.pipe(webpHTML()) // Конвертируем HTML в WebP
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream())
}

function css() { // Собираем CSS
    return src(path.src.css)
        
        .pipe(
            scss({
                outputStyle: 'expanded'
            })
        ) // Переводим scss в css

        .pipe(group_media()) // Группируем медиа запросы
        
        .pipe(
            autoprefixer({
                overrideBrowserslist: ['last 5 versions'], // Префиксы для браузеров (последние 5 версий браузеров)
                cascade: true
            })
        ) // Добавляем префиксы

        //.pipe(webpcss()) // Конвертируем CSS в WebP
        .pipe(dest(path.build.css)) // Выгружаем в папку dist/css
        .pipe(clean_css()) // Оптимизируем css

        .pipe(
            rename({
                extname: ".min.css"
            })
        ) // Добавляем расширение .min

        .pipe(dest(path.build.css)) // Выгружаем в папку dist/css
        .pipe(browsersync.stream()) // Обновляем браузер
}

function js() { // Собираем JS
    return src(path.src.js)
        .pipe(fileinclude())
        .pipe(dest(path.build.js)) // Выгружаем в папку dist/js
        .pipe(uglify()) // Сжимаем JS
        .pipe(
            rename({
                extname: ".min.js"
            })
        ) // Добавляем расширение .min

        .pipe(dest(path.build.js)) // Выгружаем в папку dist/js
        .pipe(browsersync.stream()) // Обновляем браузер
}

function images () {
    return src(path.src.img)
        .pipe(
            webp({
                quality: 70
            })
        ) // Конвертируем в webp
        .pipe(dest(path.build.img)) // Выгружаем в папку dist/img
        /*.pipe(src(path.src.img)) // Получаем исходники для оптимизации
        .pipe(
            imagemin({
                progressive: true, // Прогрессивное сжатие jpg и png
                svgoPlugins: [{ removeViewBox: false }], // Удаляем весь код viewbox
                interlaced: true, // Уплотняем изображение для скорости загрузки
                optimizationLevel: 3 // Оптимизация изображений
            })
        )
        .pipe(dest(path.build.img))*/
        .pipe(browsersync.stream())
}

function fonts(){
    src(path.src.fonts)
        .pipe(ttf2woff())
        .pipe(dest(path.build.fonts))
    return src(path.src.fonts)
        .pipe(ttf2woff2())
        .pipe(dest(path.build.fonts))
}

gulp.task('svgSprite', function () {
    return gulp.src([source_folder + '/iconsprite/*.svg'])
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: "../icons/icons.svg", // Путь к спрайту
                    example: true
                }
            },
        }))
        .pipe(dest(path.build.img))
})

function watchFiles(params) { // Наблюдение за изменениями
    gulp.watch([path.watch.html], html); 
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
    gulp.watch([path.watch.img], images);
}

function clean(params) {
    return del(path.clean); // Удаляем папку dist перед сборкой
}

let build = gulp.series(clean, gulp.parallel(js, css, html, images, fonts));
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.fonts = fonts;
exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;