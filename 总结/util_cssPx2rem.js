/* node工具-CSS文件中px单位转rem单位，比例100，如1px->0.01rem */
var fs = require('fs');
var file = fs.readFileSync('./index.css', "utf8");

var css = file.replace(/(\d*)(px)/g, function(match, $1, $2, pos, originalText) {
	//'$1rem'
	return $1 / 100 + 'rem';
});
fs.writeFile('./aaaa.css', css, [], function(){

});
console.log(css);