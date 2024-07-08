const gulp = require('gulp');
const concat = require('gulp-concat');

gulp.task('styles', function () {
    return gulp.src([
        'src/css/compile/reset.css',
        'src/css/compile/custom.css',
        'src/css/compile/utility.css',
        'src/css/compile/main.css',
    ])
        .pipe(concat('compiled.css'))
        .pipe(gulp.dest('src/css'));
});

gulp.task('watch', function () {
    gulp.watch('src/css/compile/*.css', gulp.series('styles'));
});

gulp.task('default', gulp.series('styles', 'watch'));
