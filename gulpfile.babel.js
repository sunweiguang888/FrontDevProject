/**
 * gulp配置文件
 * Created by weiguangsun on 2016/4/5.
 * 由gulpfile.js命名为gulpfile.babel.js，gulp读取配置文件时自动调用babel，前提需要先安装babel-core
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
	webpack = require('webpack-stream'),		//webpack
	autoprefixer = require('gulp-autoprefixer'),		// 自动添加css前缀
	header = require('gulp-header'),		// 自动添加文件头
	size = require('gulp-size'),		// 显示gulp.dest输出到磁盘上的文件尺寸
	sourcemaps = require('gulp-sourcemaps')		// 生成sourcemaps
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
gulp.task('compileSass', () => {
	console.log('>>>>>>>>>>>>>>> sass文件开始编译。' + new Date());
	return gulp.src('src/scss/*.scss')		// return这个流是为了保证任务按顺序执行
		// 开发环境
		.pipe(sourcemaps.init())	// 放到最开始才能对应原始的scss文件
		.pipe(sass({outputStyle: 'uncompressed'}))
		.pipe(autoprefixer())
		.pipe(sourcemaps.write('./'))	// 写到目标css同级目录下
		.pipe(header('\/* This css was compiled at '+ new Date() +'. *\/\n'))
		.pipe(gulp.dest('build/css'))
		.pipe(size({showFiles: true}))
		.pipe(liveReload())
		// 正式环境
		.pipe(minifyCss())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('deploy/css'))
		.pipe(size({showFiles: true}))
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
		.pipe(header('\/* This css was compiled at '+ new Date() +'. *\/\n'))
		.pipe(gulp.dest('build/js'))
		.pipe(size({showFiles: true}))
		.pipe(liveReload())
		// 正式环境
		.pipe(uglify({
			mangle: true,  // 类型：Boolean 默认：true 是否修改变量名
			compress: true,  // 类型：Boolean 默认：true 是否完全压缩
			preserveComments: 'none'  // all保留所有注释
		}))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('deploy/js'))
		.pipe(size({showFiles: true}))
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
		.pipe(size({showFiles: true}))
		.pipe(liveReload())
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
		.pipe(size({showFiles: true}))
	;
});
// html文件修改监听
gulp.task('watchHtml', function () {
	gulp.watch('src/*.html', ['compileHtml']);
});