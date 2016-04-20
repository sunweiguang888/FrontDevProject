/**
 * Created by weiguangsun on 2016/4/20.
 */
var fs = require('fs');

module.exports = {
	entry: function() {
		var entry = {},
			jsArr = fs.readdirSync('./src/js/'),
			js;
		for(var i in jsArr){
			js = jsArr[i];
			entry[js.replace('.js', '')] = './src/js/' + js;
		}
		console.log(entry);
		return entry;
	}(),
	output: {
		path: __dirname + '/build/js',
		publicPath: '../../js/',
		filename: "[name].bundle.js"
	},
	module: {
		loaders: [
			{ test: /\.css$/, loader: "style!css" }
		]
	}
};