import gulp from "gulp";

// Конфигурация
import path from "../config/path.js";
import app from "../config/app.js";

// Плагины
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import webpCss from "gulp-webp-css";
import autoprefixer from "gulp-autoprefixer";
import shorthand from "gulp-shorthand";
import groupCssMediaQueries from "gulp-group-css-media-queries";
import size from "gulp-size";
import csso from "gulp-csso";
import rename from "gulp-rename";
import sassPlugin from "gulp-sass";
import sassCompile from "sass";
import sassGlob from "gulp-sass-glob";

const sass = sassPlugin(sassCompile);


// Обработка SCSS
export default () => {
  return gulp.src(path.scss.src, { sourcemaps: app.isDev })
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: 'SCSS',
        message: error.message
      }))
    }))
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(webpCss())
    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(groupCssMediaQueries())
    .pipe(size({ title: 'main.css' }))
    .pipe(gulp.dest(path.scss.dest, { sourcemaps: app.isDev }))
    .pipe(csso())
    .pipe(rename({ suffix: '.min' }))
    .pipe(size({ title: 'main.min.css' }))
    .pipe(gulp.dest(path.scss.dest, { sourcemaps: app.isDev }));
}