
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

var environment = plugins.util.env.environment || 'development';


gulp.task('copy', function() {
    return gulp.src()
    .pipe()
});

gulp.task('styles', function() {
  return gulp.src([
    'styles/ground.less'
    ])
    .pipe(plugins.less())
    .pipe(plugins.cssmin())
    .pipe(gulp.dest('src/pyramid_sphinx_themes/ground/static/dist/css'))
});

gulp.task('scripts', function() {
  return gulp.src([
    'src/pyramid_sphinx_themes/ground/static/js/theme.js'
    ])
    .pipe(plugins.uglify())
    .pipe(gulp.dest('src/pyramid_sphinx_themes/ground/static/dist/js'));
});

gulp.task('build', ['styles', 'scripts']);

gulp.task('watch', function() {
  gulp.watch('styles/**/*.less', ['styles']);
  gulp.watch('src/pyramid_sphinx_themes/ground/static/js/**/*.js', ['scripts']);
});

gulp.task('default', ['build', 'watch']);
