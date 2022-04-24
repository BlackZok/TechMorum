import gulp from "gulp";

// Конфигурация
import path from "../config/path.js";
import app from "../config/app.js";

// Плагины
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import babel from "gulp-babel";
import webpackStream from "webpack-stream";



// Обработка JavaScript
export default () => {
  return gulp.src(path.js.src, { sourcemaps: app.isDev })
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: 'JavaScript',
        message: error.message
      }))
    }))
    .pipe(babel(app.babel))
    .pipe(webpackStream(app.webpack))
    .pipe(gulp.dest(path.js.dest, { sourcemaps: app.isDev }));
}