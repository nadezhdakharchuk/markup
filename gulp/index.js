var gulp = require('./gulp')([
    'browserify',
    'sass',
    'images',
    'open',
    'watch',
    'serve'
]);

gulp.task('build', ['browserify']);
gulp.task('default', ['build', 'watch', 'serve', 'open']);
