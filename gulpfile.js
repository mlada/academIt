const gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require ('browser-sync').create();

const paths = {
    html: './workspace/*.html',
    css: './workspace/assets/styles/*.css',
    js: ['./workspace/assets/js/*.js']
};

gulp.task('start', function () {
    browserSync.init({
        port: 3000,
        server: "./workspace",
        open: true
    });
    gulp.watch(paths.css);
    gulp.watch(paths.html);
    gulp.watch(paths.js);
});