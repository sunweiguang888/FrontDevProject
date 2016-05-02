/**
 * Created by weiguangsun on 2016/4/20.
 */
var fs = require('fs')
webpack = require('webpack');

module.exports = {
	entry: function () {
		var entry = {},
			jsArr = fs.readdirSync('./src/js/'),
			js;
		for (var i in jsArr) {
			js = jsArr[i];
			entry[js.replace('.js', '')] = './src/js/' + js;
		}
		console.log(entry);
		return entry;
	}(),
	output: {
		path: __dirname + '/build/js',	//__dirname 是当前模块文件所在目录的完整绝对路径
		//publicPath: '../../js/',		//网站运行时的访问路径 未知
		filename: "[name].js"
	},
	module: {
		loaders: [
			//{test: /\.css$/, loader: "style!css"},	不好用// 表示.css文件用style-loader或css-loader来解析
			{test: /\.tpl$/, loader: "tmodjs"}	// artTemplate的webpack版
		]
	},
	resolve: {
		alias: {
			jquery: __dirname + '/lib/jquery.min.js'
		}
	},
	plugins: [
		//提供全局的变量，在模块中使用无需用require引入
		new webpack.ProvidePlugin({
			jQuery: "jquery",
			$: "jquery",
		}),
		//new webpack.BannerPlugin('This file is created by swg'),
		//将公共代码抽离出来合并为一个文件
		new webpack.optimize.CommonsChunkPlugin('common.bundle.js'),
	]
};