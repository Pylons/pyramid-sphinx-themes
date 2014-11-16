
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

var environment = plugins.util.env.environment || 'development';


gulp.task('copy-css', function() {
  return gulp.src([
    'components/bootstrap/dist/css/bootstrap.min.css',
    'components/bootstrap/dist/css/bootstrap.css.map',
    'components/font-awesome/css/font-awesome.min.css',
    ])
    .pipe(gulp.dest('src/pyramid_sphinx_themes/ground/static/dist/css'))
});

gulp.task('copy-fonts', function() {
  return gulp.src([
    'components/bootstrap/dist/fonts/*',
    'components/font-awesome/fonts/*',
    ])
    .pipe(gulp.dest('src/pyramid_sphinx_themes/ground/static/dist/fonts'))
});

gulp.task('copy-js', function() {
  return gulp.src([
    'components/bootstrap/dist/js/bootstrap.min.js',
    'components/html5shiv/dist/*.min.js',
    'components/jquery/dist/jquery.min.*',
    'components/respond/dest/*.min.js',
    'components/underscore/*-min*'
    ])
    .pipe(gulp.dest('src/pyramid_sphinx_themes/ground/static/dist/js'))
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
gulp.task('init', ['copy-css', 'copy-fonts', 'copy-js'])
