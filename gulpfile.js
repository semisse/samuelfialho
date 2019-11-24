var gulp = require('gulp');
var $    = require('gulp-load-plugins')();
var connect = require('gulp-connect');

var sassPaths = [
  'bower_components/normalize.scss/sass',
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src'
];

gulp.task('sass', function() {
  return gulp.src('scss/app.scss')
    .pipe($.sass({
      includePaths: sassPaths,
      outputStyle: 'compressed' // if css compressed **file size**
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('css'))
    .pipe(connect.reload());
});

gulp.task('webserver', function() {
  connect.server({
    livereload: true,
    port: 8888
  });
});

gulp.task('html', function () {
  gulp.src('*.html')
    .pipe(connect.reload());
});

gulp.task('default', ['sass', 'webserver'], function() {
  gulp.watch(['scss/**/*.scss'], ['sass']);
  gulp.watch(['scss/**/*.sass'], ['sass']);
  gulp.watch(['scss/**/**/*.sass'], ['sass']);
  gulp.watch(['webserver']);
  gulp.watch(['*.html'], ['html']);
  gulp.watch(['js/*.js'], ['html']);
});
