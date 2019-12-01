"use strict";

var gulp = require("gulp");

//PostCss
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var nested = require("postcss-nested");
var vars = require("postcss-simple-vars");
var importCssUrl = require("postcss-import-url");
var importCss = require("postcss-partial-import");
var inlineSvg = require("postcss-inline-svg");
var cssnano = require("cssnano");

var browserify = require("browserify");
var browserSync = require("browser-sync").create();
var reload = browserSync.reload;
var jade = require("gulp-jade");


// gulp.task("sass", function () {
//   return gulp.src("./app/scss/**/*.scss")
//   .pipe(sass().on("error", sass.logError))
//   .pipe(gulp.dest("./app/css"))
//   .pipe(reload({stream: true}));
// });


gulp.task("css", function () {
  var processors = [
    importCssUrl,
    importCss,
    nested,
    vars,
    inlineSvg({
      path: "./app/render/images"
    }),
    autoprefixer({browsers: ["last 4 version"]}),
    //cssnano(),
  ];
  return gulp.src("./app/scss/*.css")
    .pipe(postcss(processors))
    .pipe(gulp.dest("./app/render/css"))
    .pipe(reload({stream: true}));
});

gulp.task("jade", function() {
  return gulp.src("./app/views/*.jade")
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest("./app/render"))
    .pipe(reload({stream: true}));
});

gulp.task("watch", function () {
  gulp.watch("./app/views/*.jade",["jade"]);
  gulp.watch("./app/scss/**/*.css", ["css"]);
});

gulp.task("server", ["css", "jade"], function() {
  browserSync.init({
    server: {
      baseDir: "./app/render/"
    },
    port: 3300,
    notify: false
  });
});

gulp.task("default", ["server", "watch"]);
