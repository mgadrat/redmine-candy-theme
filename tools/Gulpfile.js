var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require("gulp-notify");

gulp.task('styles', function() {
    gulp.src('../sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('../themes/gadmine/stylesheets/'))
        .pipe(notify("Your css is ready!"));
});

//Watch task
gulp.task('default',function() {
    gulp.watch('../sass/**/*.scss',['styles']);
});