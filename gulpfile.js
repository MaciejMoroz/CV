"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var browserSync = require("browser-sync").create();
var nunjacksRender = require("gulp-nunjucks-render");

gulp.task("img", function() {
  gulp.src("./src/img/**/*").pipe(gulp.dest("./web/img"));
});

gulp.task("fonts", function() {
  gulp.src("./src/fonts/**/*").pipe(gulp.dest("./web/fonts"));
});

gulp.task("sass", function() {
  gulp
    .src("./src/scss/style.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest("./web/css/"))
    .pipe(browserSync.stream());
});

gulp.task("js", function() {
  gulp.src(["src/js/*"]).pipe(gulp.dest("./web/js/"));
});

gulp.task("nunjucks", function() {
  return gulp
    .src(["src/templates/*.html"])
    .pipe(
      nunjacksRender({
        path: ["src/templates"]
      })
    )
    .pipe(gulp.dest("./web"));
});

gulp.task("build", ["img", "fonts", "sass", "nunjucks", "js"], function() {
  browserSync.init({
    server: "./web"
  });
  gulp.watch("src/img/**/*", ["img"]);
  gulp.watch("src/fonts/**/*", ["fonts"]);
  gulp.watch("src/scss/**/*.scss", ["sass"]);
  gulp.watch("src/templates/**/*.html", ["nunjucks"]);
  gulp.watch("src/js/*.js", ["js"]);
  gulp.watch("web/*.html").on("change", browserSync.reload);
  gulp.watch("web/js/*.js").on("change", browserSync.reload);
  gulp.watch("web/img/**/*").on("change", browserSync.reload);
  gulp.watch("web/fonts/**/*").on("change", browserSync.reload);
});

gulp.task("default", ["build"]);
