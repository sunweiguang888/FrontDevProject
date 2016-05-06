/**
 * Created by weiguangsun on 2016/4/21.
 */
//var templateHelper = require('templateHelper');

function Demo() {
    var $body = $('body');
    this.name = '哈哈哈';
    var tpl = require('../tpl/demo.tpl')({a: Date.now()});
	document.body.innerHTML = tpl;
	//require('../scss/demo.scss');
    var json = require('../json/demo.json');

    /*var png = require('../image/demo.png');
    var img = document.createElement('img');
    img.src = png;
    document.body.appendChild(img);*/

	debugger
};
new Demo();