module.exports = function() {
    $.gulp.task('img', function() {
        return $.gulp.src('img/*.{png,jpg,gif,svg}')
            .pipe($.gulp.dest('build/img'))
    });
}
