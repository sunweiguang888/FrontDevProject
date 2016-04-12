/**
 * Created by weiguangsun on 2016/4/5.
 */
var gulp = require('gulp');

// 引入组件
var $ = require('gulp-load-plugins')(),
	uglify = require('gulp-uglify'),		// js压缩
	rename = require('gulp-rename'),		// 重命名
	sass = require('gulp-sass'),			// sass
	minifycss = require('gulp-minify-css')	// css压缩
;

var DEV = {
	JS: {
		taskName: 'js:dev',
		watchTaskName: 'js:dev-watch',
		src: 'src/js/*.js',
		dest: '.build/js'
	},
	CSS: {
		taskName: 'css:dev',
		watchTaskName: 'css:dev-watch',
		src: 'src/scss/*.scss',
		dest: '.build/css'
	}
};

// 任务入口
gulp.task('default', [
		DEV.JS.taskName, DEV.CSS.taskName,
		DEV.JS.watchTaskName, DEV.CSS.watchTaskName
	], function () {
		console.log('全部任务已执行。');
	}
);

// js压缩
gulp.task(DEV.JS.taskName, function () {
	gulp.src(DEV.JS.src)
		//.pipe(uglify({
		//	mangle: true,  // 类型：Boolean 默认：true 是否修改变量名
		//	compress: true,  // 类型：Boolean 默认：true 是否完全压缩
		//	preserveComments: 'none'  // all保留所有注释
		//}))
		//.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(DEV.JS.dest))
	;
	console.log('js压缩已执行。');
});
gulp.task(DEV.JS.watchTaskName, function () {
	gulp.watch(DEV.JS.src, [DEV.JS.taskName], function (event) {
		//console.log(event.path + ' ' + event.type + ' 继续监控...');
		console.log('js被修改。');
	});
});

// sass预编译，css压缩
gulp.task(DEV.CSS.taskName, function () {
	gulp.src(DEV.CSS.src)
		.pipe(sass({outputStyle: 'uncompressed'}))
		.pipe(gulp.dest(DEV.CSS.dest))
		//.pipe(minifycss())
		//.pipe(rename({suffix: '.min'}))
		//.pipe(gulp.dest(DEV.CSS.dest2))
	;
	console.log('sass预编译已执行。');
});
gulp.task(DEV.CSS.watchTaskName, function () {
	gulp.watch(DEV.CSS.src, [DEV.CSS.taskName], function (event) {
		console.log('sass被修改。');
	});
});


