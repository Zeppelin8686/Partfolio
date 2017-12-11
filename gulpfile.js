'use strict';
//sass/////////////////////////////
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
//sprite///////////////////////////
const svgSprite	= require('gulp-svg-sprite');
const svgmin = require('gulp-svgmin');
const cheerio = require('gulp-cheerio');
const replace = require('gulp-replace');
//webpack///////////////////////////
const gulpWebpack = require('gulp-webpack');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
//options///////////////////////////
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const concat = require('gulp-concat');
const plumber = require('gulp-plumber');


//Remove foder "dist"//////////////////////////////////////////////
gulp.task('clean', function() {
	return del('dist/');
});

//Scss to css + minification////////////////////////////////////////
gulp.task('sass', function() {
	return gulp.src('app/scss/main.scss')
	.pipe(plumber())
  .pipe(sourcemaps.init())
  .pipe(autoprefixer({
    browsers: ['last 2 versions']}))
	.pipe(sass({outputStyle: 'compressed'}))
	.on('error', sass.logError)
	.pipe(rename({suffix: '.min'}))
	.pipe(sourcemaps.write('/'))
	.pipe(gulp.dest('dist/css/'))
	.pipe(browserSync.stream());
	});

//watcher/////////////////////////////////
gulp.task('watch', function() {
	gulp.watch('app/scss/**/*.scss', gulp.series('sass'));
	gulp.watch('app/*.html', gulp.series('templates'));
	gulp.watch('app/css/*.css', gulp.series('concat-css'));
	gulp.watch('app/js/**/*.js', gulp.series('webpack'));
	gulp.watch(['app/icons/*.*', 'app/img/*.*'], gulp.series('images'));
});

//If have plugins this function will make concatination all plugins to one css file. File plugins.css should be to add to html.//////////////////////////////
gulp.task('concat-css', function() {
	return gulp.src([])
	.pipe(concat('plugins.css'))
	.pipe(gulp.dest('dist/css/'));	
});

// gulp.task('concat-js', function() {
// 	return gulp.src([])
// 	.pipe(concat('plugins.js'))
// 	.pipe(gulp.dest('dist/js'));	
// });

//transfer all html files to "dist"/////////////////////////
gulp.task('templates', function() {
	return gulp.src('app/*.html')
	.pipe(gulp.dest('dist'));
});

//transfer all images to "dist"////////////////////////////
gulp.task('images', function() {
	return gulp.src(['app/icons/**', 'app/img/**'], {base: 'app/'})
	.pipe(gulp.dest('dist'))
})

//transfer fonts, normalize and onather static files or folders to "dist"////////////
gulp.task('assets', function() {
	return gulp.src(['app/fonts/**', 'app/css/normalize.css'], {base: 'app/'})
	.pipe(gulp.dest('dist'))
});

//liveserver///////////////////////////////////////////////
gulp.task('server', function() {
	browserSync.init({
	notify: false,
	port: 5000,
	server: {
		baseDir: 'dist/'
			}
		});
		browserSync.watch('dist/**/*.*', browserSync.reload);
});

//webpack//////////////////////////////////////
gulp.task('webpack', function() {
	return gulp.src('app/js/index.js')
	.pipe(gulpWebpack(webpackConfig, webpack))
	.pipe(gulp.dest('dist/js'))
})

//build derictory "dist" /////////////////////////////
gulp.task('default', gulp.series('clean',

gulp.parallel('sass', 'templates', 'assets', 'images', 'webpack'),
gulp.parallel('watch', 'server')
));

//make svg sprite//////////////////////
gulp.task('svg', function(){
  return	gulp.src('app/icons/*.svg')
	.pipe(plumber())
	.pipe(svgmin({
		js2svg: {
			pretty: true
		}
	}))
	.pipe(cheerio({
		run: function($) {
			$('[fill]').removeAttr('fill');
			$('[stroke]').removeAttr('stroke');
			$('[style]').removeAttr('style');
		},
		parserOptions: {xmlMode: true}
	}))
	.pipe(replace('&gt;', '>')) //if svg file has special symbol instead of ">" shange it to ">"
	.pipe(svgSprite(
		{
			mode: {
				symbol: {
					sprite: "..sprite.svg",
					render: {
						scss: {
							dest: 'sprite.scss'
						}
					}
				}
			}
		}
	))
	.pipe(gulp.dest('app/icons'));
});