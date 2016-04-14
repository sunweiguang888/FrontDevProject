/**
 * Created by weiguangsun on 2016/4/5.
 */
var gulp = require('gulp');

// 引入组件
var	uglify = require('gulp-uglify'),		// js压缩混淆
	//$ = require('gulp-load-plugins')(),		//插件加载器，启动加载devDependencies中所有插件
	rename = require('gulp-rename'),		// 文件重命名
	sass = require('gulp-sass'),			// sass预编译
	concat = require('gulp-concat'),			// 文件合并 .pipe(concat('all.js'))
	minifyHtml = require('gulp-minify-html'),		// html压缩
	imagemin = require('gulp-imagemin'),		// 图片压缩
	liveReload = require('gulp-livereload'),		// 文件变化时自动刷新浏览器
	minifyCss = require('gulp-minify-css')	// css压缩
;

// ************************************ 编译(npm start) ************************************
// 任务入口
gulp.task('default', [
		'compileCss',
		'watchCss'
	], function () {
		console.log('全部任务已执行。');
	}
);

// sass预编译，css压缩
gulp.task('compileCss', function () {
	gulp.src('src/scss/*.scss')
		.pipe(sass({outputStyle: 'uncompressed'}))
		.pipe(gulp.dest('.build/css'))
		.pipe(liveReload())		// scss文件变化时自动刷新浏览器
	;
	console.log('sass预编译已执行。');
});
gulp.task('watchCss', function () {
	liveReload.listen();		// 文件变化时自动刷新浏览器
	gulp.watch('src/scss/*.scss', ['compileCss'], function (event) {
		console.log('sass被修改。'+event.path);
	});
});

// ************************************ 发布 ************************************
gulp.task('deploy', ['deployCss', 'deployJs', 'deployHtml', 'deployImg'], function () {
	console.log('已发布');
});

// 发布css
gulp.task('deployCss', function () {
	gulp.src('src/scss/*.scss')
		.pipe(sass({outputStyle: 'uncompressed'}))
		.pipe(minifyCss())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('deploy/css'))
	;
	console.log('sass预编译已执行。');
});

// 发布js
gulp.task('deployJs', function () {
	gulp.src('src/js/*.js')
		.pipe(uglify({
			mangle: true,  // 类型：Boolean 默认：true 是否修改变量名
			compress: true,  // 类型：Boolean 默认：true 是否完全压缩
			preserveComments: 'none'  // all保留所有注释
		}))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('deploy/js'))
	;
	console.log('js压缩已执行。');
});

// 发布js
gulp.task('deployImg', function () {
	gulp.src('src/images/**/*.*')
		.pipe(imagemin())
		.pipe(gulp.dest('deploy/images'))
	;
	console.log('images压缩已执行。');
});



// 发布html
gulp.task('deployHtml', function () {
	gulp.src('src/*.html')
		.pipe(minifyHtml())
		.pipe(gulp.dest('deploy'))
	;
	console.log('js压缩已执行。');
});
