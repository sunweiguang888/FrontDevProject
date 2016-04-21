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
	minifyCss = require('gulp-minify-css'),		// css压缩
	replace = require('gulp-replace'),		// 文件清除
	clean = require('gulp-clean'),	// css压缩
	webpack = require('webpack-stream')		//webpack
;

// ************************************ 文件编译(npm start) ************************************
// 任务入口
gulp.task('default', [
		'compileSass',
		'watchSass',
		'compileJs',
		'watchJs',
		'compileImg',
		'watchImg',
		'compileHtml',
		'watchHtml'
	], function () {
		console.log('>>>>>>>>>>>>>>> gulp全部任务执行完毕。' + new Date());
	}
);
// sass文件编译
gulp.task('compileSass', function () {
	gulp.src('build/css').pipe(clean());
	gulp.src('deploy/css').pipe(clean());
	gulp.src('src/scss/*.scss')
		// 开发环境
		.pipe(sass({outputStyle: 'uncompressed'}))
		.pipe(gulp.dest('build/css'))
		// 正式环境
		.pipe(minifyCss())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('deploy/css'))
		//待解决
		.pipe(liveReload())		// scss文件变化时自动刷新浏览器
	;
	console.log('>>>>>>>>>>>>>>> sass文件编译完毕。' + new Date());
});
// sass文件修改监听
gulp.task('watchSass', function () {
	liveReload.listen();	//待解决	// 文件变化时自动刷新浏览器
	gulp.watch('src/scss/*.scss', ['compileSass']);
});

// js文件编译（webpack）
gulp.task('compileJs', function () {
	gulp.src('build/js').pipe(clean());
	gulp.src('deploy/js').pipe(clean());
	gulp.src('build/js')
		// 开发环境
		.pipe(webpack(require("./webpack.config.js")))
		.pipe(gulp.dest('build/js'))
		// 正式环境
		.pipe(uglify({
			mangle: true,  // 类型：Boolean 默认：true 是否修改变量名
			compress: true,  // 类型：Boolean 默认：true 是否完全压缩
			preserveComments: 'none'  // all保留所有注释
		}))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('deploy/js'))
	;
	console.log('>>>>>>>>>>>>>>> js文件编译完毕。' + new Date());
});
// js文件修改监听
gulp.task('watchJs', function () {
	gulp.watch('src/js/*.js', ['compileJs']);
});

// 图片文件编译
gulp.task('compileImg', function () {
	gulp.src('deploy/images').pipe(clean());
	gulp.src('src/images/**/*.*')
		// 开发环境
		// 正式环境
		.pipe(imagemin())
		.pipe(gulp.dest('deploy/images'))
	;
	console.log('>>>>>>>>>>>>>>> 图片文件编译完毕。' + new Date());
});
// 图片文件修改监听
gulp.task('watchImg', function () {
	gulp.watch('src/images/**/*.*', ['compileImg']);
});

// html文件编译
gulp.task('compileHtml', function () {
	gulp.src('deploy/*.html').pipe(clean());
	gulp.src('src/*.html')
		// 开发环境
		// 正式环境
		.pipe(replace('../build/', './'))
		.pipe(replace('.css', '.min.css?v=' + Date.now()))
		.pipe(replace('.js', '.min.js?v=' + Date.now()))
		.pipe(minifyHtml())
		.pipe(gulp.dest('deploy'))
	;
	console.log('>>>>>>>>>>>>>>> html文件编译完毕。' + new Date());
});
// html文件修改监听
gulp.task('watchHtml', function () {
	gulp.watch('src/*.html', ['compileHtml']);
});