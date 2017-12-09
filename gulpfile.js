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
//options///////////////////////////
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const concat = require('gulp-concat');
const plumber = require('gulp-plumber');



gulp.task('clean', function() {
	return del('dist/');
});

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

gulp.task('watch', function() {
	gulp.watch('app/scss/**/*.scss', gulp.series('sass'));
	gulp.watch('app/*.html', gulp.series('templates'));
	// gulp.watch('app/js/*.js').on('change', browserSync.reload);
	gulp.watch('app/css/*.css', gulp.series('concat-css'));
	gulp.watch(['app/icons/*.*', 'app/img/*.*'], gulp.series('images'));
});

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

gulp.task('templates', function() {
	return gulp.src('app/*.html')
	.pipe(gulp.dest('dist'));
});

gulp.task('images', function() {
	return gulp.src(['app/icons/**', 'app/img/**'], {base: 'app/'})
	.pipe(gulp.dest('dist'))
})

gulp.task('assets', function() {
	return gulp.src(['app/fonts/**', 'app/css/normalize.css'], {base: 'app/'})
	.pipe(gulp.dest('dist'))
});

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

gulp.task('default', gulp.series('clean',

gulp.parallel('sass', 'templates', 'assets', 'images'),
gulp.parallel('watch', 'server')
));

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
	.pipe(replace('&gt;', '>'))
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