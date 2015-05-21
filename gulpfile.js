var gulp = require('gulp');
var mocha = require('gulp-mocha');
var less = require('gulp-less');
var path = require('path');

gulp.task('test', function () {
    return gulp.src(__dirname + '/tests/*.js', { read: false })
        // gulp-mocha needs filepaths so you can't have any plugins before it
        .pipe(mocha({reporter: 'spec'}));
});

gulp.task('less', function () {
  return gulp.src('./less/index.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('watch', function(){
	gulp.watch('./less/*', ['less']);
});

gulp.task('default', ['less', 'watch']);
