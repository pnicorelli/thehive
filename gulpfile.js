var gulp = require('gulp')
var concat = require('gulp-concat')
var rename = require('gulp-rename')
var util = require('gulp-util');
var ngConfig = require('gulp-ng-config');
var config = require('./gulpconfig.json');

var DEST = 'public/thehive';

gulp.task('build-js', function () {
  gulp.src(config.jsSrc)
  .pipe(concat('bundle.js'))
  .pipe(gulp.dest(config.DEST))
})

gulp.task('build-config', function () {
  var target = util.env.target || 'devel';
  gulp.src(['app/config/'+target+'.json'])
  .pipe(ngConfig('theHive'))
  .pipe(rename('config.js'))
  .pipe(gulp.dest(DEST))
})

gulp.task('build', ['build-config', 'build-js'],  function(){});
