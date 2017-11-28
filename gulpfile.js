'use strict';

const 	gulp = require('gulp'),
		watch = require('gulp-watch'),
		autoprefixer = require('gulp-autoprefixer'),
		cleanCSS = require('gulp-clean-css'),
		concatCSS = require('gulp-concat-css'),
		sass = require('gulp-sass'),
		sourcemaps = require('gulp-sourcemaps'),
		rimraf = require('rimraf');


var path = {
	build: {
		css: 'build/css/'
	},
	src: {
		style: 'src/sass/*.scss'
	},
	watch: {
		style: 'src/sass/*.scss'
	},
	clean: './build'
};	

gulp.task('style:build', function () {
	gulp.src('src/sass/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass({
		errLogToConsole: true
	}))
	.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8'], { cascade: true }))
	.pipe(concatCSS("main.css"))
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('build/css'))
});

gulp.task('clean', function (cb) {
	rimraf(path.clean, cb);
});

gulp.task('build', [
	'style:build'
	]);

gulp.task('watch', function(){
	watch([path.watch.style], function(event, cb) {
		gulp.start('style:build');
	});
});

gulp.task('default', ['build']);