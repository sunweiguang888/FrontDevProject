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
	liveReload = require('gulp-livereload'),		// 文件变化时自动刷新浏览器，chrome需要安装LiveReload插件
	minifyCss = require('gulp-minify-css'),		// css压缩
	replace = require('gulp-replace'),		// 文件清除
	clean = require('gulp-clean'),	// css压缩
	runSequence = require('run-sequence'),	// 使gulp任务按顺序执行，因为gulp里任务默认是异步执行的
	webpack = require('webpack-stream')		//webpack
;

// ************************************ 文件编译(npm start) ************************************
// 任务入口
gulp.task('default', [], function () {
	runSequence('clean',
		'compileSass',
		'watchSass',
		'compileJs',
		'watchJs',
		'compileImg',
		'watchImg',
		'compileHtml',
		'watchHtml',
		function(){
			console.log('>>>>>>>>>>>>>>> gulp全部任务执行完毕。' + new Date());
		}
	);
});
// sass目录清理
gulp.task('clean', function () {
	return gulp.src('build').pipe(clean()) && gulp.src('deploy').pipe(clean());
});
// sass文件编译
gulp.task('compileSass', function () {
	console.log('>>>>>>>>>>>>>>> sass文件开始编译。' + new Date());
	return gulp.src('src/scss/*.scss')		// return这个流是为了保证任务按顺序执行
		// 开发环境
		.pipe(sass({outputStyle: 'uncompressed'}))
		.pipe(gulp.dest('build/css'))
		.pipe(liveReload())
		// 正式环境
		.pipe(minifyCss())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('deploy/css'))
	;
});
// sass文件修改监听
gulp.task('watchSass', function () {
	liveReload.listen();	//开启liveReload
	gulp.watch('src/scss/*.scss', ['compileSass']);
});

// js文件编译（webpack）
gulp.task('compileJs', function () {
	console.log('>>>>>>>>>>>>>>> js文件开始编译。' + new Date());
	return gulp.src('build/js')
		// 开发环境
		.pipe(webpack(require("./webpack.config.js")))
		.pipe(gulp.dest('build/js'))
		.pipe(liveReload())
		// 正式环境
		.pipe(uglify({
			mangle: true,  // 类型：Boolean 默认：true 是否修改变量名
			compress: true,  // 类型：Boolean 默认：true 是否完全压缩
			preserveComments: 'none'  // all保留所有注释
		}))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('deploy/js'))
	;
});
// js文件修改监听
gulp.task('watchJs', function () {
	gulp.watch('src/js/*.js', ['compileJs']);
});

// 图片文件编译
gulp.task('compileImg', function () {
	console.log('>>>>>>>>>>>>>>> 图片文件开始编译。' + new Date());
	return gulp.src('src/images/**/*.*')
		// 开发环境
		.pipe(liveReload())
		// 正式环境
		.pipe(imagemin())
		.pipe(gulp.dest('deploy/images'))
	;
});
// 图片文件修改监听
gulp.task('watchImg', function () {
	gulp.watch('src/images/**/*.*', ['compileImg']);
});

// html文件编译
gulp.task('compileHtml', function () {
	console.log('>>>>>>>>>>>>>>> html文件开始编译。' + new Date());
	return gulp.src('src/*.html')
		// 开发环境
		.pipe(liveReload())
		// 正式环境
		.pipe(replace('../build/', './'))
		.pipe(replace('.css', '.min.css?v=' + Date.now()))
		.pipe(replace('.js', '.min.js?v=' + Date.now()))
		.pipe(minifyHtml())
		.pipe(gulp.dest('deploy'))
	;
});
// html文件修改监听
gulp.task('watchHtml', function () {
	gulp.watch('src/*.html', ['compileHtml']);
});