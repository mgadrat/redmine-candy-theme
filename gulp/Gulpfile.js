var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require("gulp-notify");
var concat = require('gulp-concat');
var runSequence = require('run-sequence');


gulp.task('styles', function() {
  runSequence('custom-styles', 'add-vendor-css');
});

gulp.task('scripts', function() {
  runSequence('custom-scripts', 'add-vendor-js');
});

gulp.task('custom-styles', function() {
  return gulp.src('../sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('../themes/candy/stylesheets/'))
    .pipe(notify("Your css is ready!"));
});

gulp.task('custom-scripts', function() {
  return gulp.src('../js/**/*.js')
    .pipe(concat('theme.js'))
    .pipe(gulp.dest('../themes/candy/javascripts/'))
    .pipe(notify("Your js is ready!"));
});

gulp.task('add-vendor-css', function() {
  return gulp.src(['../vendor/select2.min.css', '../themes/candy/stylesheets/application.css'])
    .pipe(concat('application.css'))
    .pipe(gulp.dest('../themes/candy/stylesheets/'))
    .pipe(notify("Vendors css is ready!"));
})

gulp.task('add-vendor-js', function() {
  return gulp.src(['../vendor/select2.full.min.js', '../themes/candy/javascripts/theme.js'])
    .pipe(concat('theme.js'))
    .pipe(gulp.dest('../themes/candy/javascripts/'))
    .pipe(notify("Vendors js is ready!"));
})

//Watch task
gulp.task('default',function() {
    gulp.watch('../sass/**/*.scss',['styles']);
    gulp.watch('../js/**/*.js',['scripts']);
});