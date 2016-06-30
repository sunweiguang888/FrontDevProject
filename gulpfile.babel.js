/**
 * gulp配置文件
 * Created by weiguangsun on 2016/4/5.
 * 由gulpfile.js命名为gulpfile.babel.js，gulp读取配置文件时自动调用babel，
 * 前提需要先安装babel-core、babel-preset-es2015、babel-preset-stage-0
 */

// 引入组件
import gulp from 'gulp';
//$ = require('gulp-load-plugins')(),		//插件加载器，启动加载devDependencies中所有插件
import	uglify from 'gulp-uglify';		// js压缩混淆
import	rename from 'gulp-rename';		// 文件重命名
import	sass from 'gulp-sass';			// sass预编译
import	concat from 'gulp-concat';			// 文件合并 .pipe(concat('all.js'
import	minifyHtml from 'gulp-minify-html';		// html压缩
import imagemin from 'gulp-imagemin';		// 图片压缩
import	liveReload from 'gulp-livereload';		// 文件变化时自动刷新浏览器，chrome需要安装LiveReload插件
import	minifyCss from 'gulp-minify-css';		// css压缩
import	replace from 'gulp-replace';		// 文件清除
import	clean from 'gulp-clean';	// 清除目录下的内容
import	runSequence from 'run-sequence';	// 使gulp任务按顺序执行，因为gulp里任务默认是异步执行的
import 	webpack from 'webpack-stream';		//webpack
import	autoprefixer from 'gulp-autoprefixer';		// 自动添加css前缀
import	header from 'gulp-header';		// 自动添加文件头
import	size from 'gulp-size';		// 显示gulp.dest输出到磁盘上的文件尺寸
import	sourcemaps from 'gulp-sourcemaps';		// 生成sourcemaps
import	fs from 'fs';		// 文件操作模块
import	moment from 'moment';		// 时间格式化
import	inquirer from 'inquirer';		// 控制台接收输入

const Path = {
	srcRoot: 'src',
	devRoot: 'dev',
	distRoot: 'dist'
};
Path.src = {
	css: Path.srcRoot + '/**/*.scss',
	js: [
		Path.srcRoot + '/module/*/js/*.js',
		Path.srcRoot + '/common/js/*.js'
	],
	img: [
		Path.srcRoot + '/**/*.png',
		Path.srcRoot + '/**/*.jpg',
		Path.srcRoot + '/**/*.gif'
	],
	html: Path.srcRoot + '/**/*.html',
	generator: [
		'src/generator/*.html',
		'src/generator/*/*'
	]
};

function getNow(){
	return moment().format("YYYY-MM-DD HH:mm:ss");
}

// ************************************ 文件编译(npm start) ************************************
// 任务入口
gulp.task('default', [], () => {
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
			console.log('>>>>>>>>>>>>>>> gulp全部任务执行完毕。' + getNow());
		}
	);
});
// sass目录清理
gulp.task('clean', () => gulp.src(Path.devRoot).pipe(clean()) && gulp.src('dist').pipe(clean()));
// sass文件编译
gulp.task('compileSass', () => {
	console.log('>>>>>>>>>>>>>>> sass文件开始编译。' + getNow());
	return gulp.src(Path.src.css)		// return这个流是为了保证任务按顺序执行
		// 开发环境
		.pipe(sourcemaps.init())	// 放到最开始才能对应原始的scss文件
		.pipe(sass({outputStyle: 'uncompressed'}))
		.pipe(autoprefixer())
		.pipe(sourcemaps.write('./'))	// 写到目标css同级目录下
		//.pipe(header('\/* This css was compiled at '+ getNow() +'. *\/\n'))
		.pipe(gulp.dest(Path.devRoot))
		.pipe(liveReload())
		// 正式环境
		.pipe(minifyCss())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(Path.distRoot))
		.pipe(size({showFiles: true}))
	;
});
// sass文件修改监听
gulp.task('watchSass', () => {
	liveReload.listen();	//开启liveReload
	gulp.watch(Path.src.css, ['compileSass']);
});

// js文件编译（webpack）
gulp.task('compileJs', () => {
	console.log('>>>>>>>>>>>>>>> js文件开始编译。' + getNow());
	return gulp.src('123')
		// 开发环境
		.pipe(webpack(require("./webpack.config.js")))
		.pipe(header('\/* This css was compiled at '+ getNow() +'. *\/\n'))
		.pipe(gulp.dest(Path.devRoot))
		.pipe(liveReload())
		// 正式环境
		.pipe(uglify({
			mangle: true,  // 类型：Boolean 默认：true 是否修改变量名
			compress: true,  // 类型：Boolean 默认：true 是否完全压缩
			preserveComments: 'none'  // all保留所有注释
		}))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('dist'))
		.pipe(size({showFiles: true}))
	;
});
// js文件修改监听
gulp.task('watchJs', () => {
	gulp.watch(Path.src.js, ['compileJs']);
});

// 图片文件编译
gulp.task('compileImg', () => {
	console.log('>>>>>>>>>>>>>>> 图片文件开始编译。' + getNow());
	return gulp.src(Path.src.img)
		// 开发环境
		.pipe(liveReload())
		.pipe(gulp.dest(Path.devRoot))
		.pipe(liveReload())
		// 正式环境
		.pipe(imagemin())
		.pipe(gulp.dest(Path.distRoot))
		.pipe(size({showFiles: true}))
	;
});
// 图片文件修改监听
gulp.task('watchImg', () => gulp.watch(Path.src.img, ['compileImg']));

// html文件编译
gulp.task('compileHtml', () => {
	console.log('>>>>>>>>>>>>>>> html文件开始编译。' + getNow());
	let meta = fs.readFileSync('./src/common/tpl/meta.tpl', "utf8");
	let v = moment().format("YYYY-MM-DD_HH:mm:ss");
	return gulp.src(Path.src.html)
		// 开发环境
		.pipe(replace('${{meta}}', meta))
		.pipe(replace('${{prefix}}', '../..'))
		.pipe(replace('${{suffix}}', 'v=' + v))
		.pipe(gulp.dest(Path.devRoot))
		.pipe(liveReload())
		// 正式环境
		.pipe(minifyHtml())
		.pipe(gulp.dest(Path.distRoot))
		.pipe(size({showFiles: true}))
	;
});
// html文件修改监听
gulp.task('watchHtml', () => gulp.watch(Path.src.html, ['compileHtml']));

// 创建新模块
gulp.task('create', () => {
	console.log('>>>>>>>>>>>>>>> 开始创建新模块。' + getNow());
	inquirer.prompt([
		{
			type: 'input',
			name: 'module',
			message: 'please input module\'s name ?',
			validate: function (input) {
				return input ? true : false;
			}
		},{
			type: 'input',
			name: 'desc',
			message: 'please input module\'s description ?',
			validate: function (input) {
				return input ? true : false;
			}
		},{
			type: 'input',
			name: 'title',
			message: 'please input page\'s title ?',
			validate: function (input) {
				return input ? true : false;
			}
		},{
			type: 'input',
			name: 'author',
			message: 'please input your name ?',
			validate: function (input) {
				return input ? true : false;
			}
		}
	]).then((answer) => {
		console.log(answer);
		var distDir = './src/module/'+answer.module;
		gulp.src(Path.src.generator)
			.pipe(rename({
				basename: answer.module
			}))
			.pipe(replace('${{module}}', answer.module))
			.pipe(replace('${{title}}', answer.title))
			.pipe(replace('${{desc}}', answer.desc))
			.pipe(replace('${{author}}', answer.author))
			.pipe(gulp.dest(distDir))
		;
		setTimeout(function(){
			fs.mkdirSync(distDir + '/img')
		}, 3000);
		console.log('>>>>>>>>>>>>>>> '+answer.module+'模块创建完毕。' + getNow());
	});
});