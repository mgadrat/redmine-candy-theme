var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require("gulp-notify");
var concat = require('gulp-concat');

gulp.task('css-compile', function() {
  gulp.src('../sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('../themes/gadmine/stylesheets/'))
    .pipe(notify("Your css is ready!"));
});

gulp.task('js-compile', function() {
  gulp.src('../js/**/*.js')
    .pipe(concat('theme.js'))
    .pipe(gulp.dest('../themes/gadmine/javascripts/'))
    .pipe(notify("Your js is ready!"));
});

gulp.task('css-combine', ['css-compile'], function() {
  gulp.src(['../vendor/select2.min.css', '../themes/gadmine/stylesheets/application.css'])
    .pipe(concat('application.css'))
    .pipe(gulp.dest('../themes/gadmine/stylesheets/'))
    .pipe(notify("Vendors css is ready!"));
})

gulp.task('js-combine', ['js-compile'], function() {
  gulp.src(['../vendor/select2.full.min.js', '../themes/gadmine/javascripts/theme.js'])
    .pipe(concat('theme.js'))
    .pipe(gulp.dest('../themes/gadmine/javascripts/'))
    .pipe(notify("Vendors js is ready!"));
})

//Watch task
gulp.task('default',function() {
    gulp.watch('../sass/**/*.scss',['css-combine']);
    gulp.watch('../js/**/*.js',['js-combine']);
});