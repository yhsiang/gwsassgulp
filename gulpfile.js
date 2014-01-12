var gulp = require('gulp');
var gutil = require('gulp-util');
var compass = require('gulp-compass');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');


gulp.task('compass', function() {
	gulp.src('./sass/*.scss')
		.pipe(compass({
			config_file: './config.rb',
			logging: true
		}))
});

gulp.task('default', function() {
	gulp.watch('./sass/**', function() {
		gulp.run('compass');
	});
});

gulp.task('imagemin', function() {
	gulp.src('images/*')
		.pipe(iamgemin())
		.pipe(gulp.dest('dist/images'))
});
