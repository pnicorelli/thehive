/* eslint "strict": 0 */

var gulp = require('gulp')
var concat = require('gulp-concat')
var rename = require('gulp-rename')
var util = require('gulp-util');
var ngConfig = require('gulp-ng-config');
var watch = require('gulp-watch');
var Server = require('karma').Server;
var eslint = require('gulp-eslint');

var config = require('./gulpconfig.json');

gulp.task('build-html', function () {
  gulp.src(config.htmlSrc)
  .pipe(gulp.dest(config.DEST+'/../view'))
})

gulp.task('build-js', function () {
  gulp.src(config.jsSrc)
  .pipe(concat('bundle.js'))
  .pipe(gulp.dest(config.DEST))
})

gulp.task('build-config', function () {
  var target = util.env.target || 'devel';
  gulp.src(['app/config/'+target+'.json'])
  .pipe(ngConfig('theHive', { createModule: false }))
  .pipe(rename('config.js'))
  .pipe(gulp.dest(config.DEST))
})

gulp.task('build', ['build-config', 'build-js'],  function(){});

gulp.task('watch', function() {
  gulp.watch(config.jsSrc, ['build-js']);
  gulp.watch(config.htmlSrc, ['build-html']);
});

gulp.task('test_ci', ['build'], function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('test', ['build'], function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});


gulp.task('lint', function () {
    return gulp.src(config.jsSrc)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});
