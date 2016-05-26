/* node工具-CSS文件中px单位转rem单位，比例100，如1px->0.01rem */
var fs = require('fs');
var path = './index.css';
var file = fs.readFileSync(path, "utf8");

// 替换px->rem
var css = file.replace(/(\d*)(px)/g, function(match, $1, $2, pos, originalText) {
	//'$1rem'
	return $1 / 100 + 'rem';
});

// 输出新文件
fs.writeFile(path+'.rem', css, [], function(){

});
console.log(css);