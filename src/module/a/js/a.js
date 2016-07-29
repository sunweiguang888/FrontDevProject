/**
 * 页面: a
 * 功能描述: a
 * 作者: swg
 */
var templateHelper = require('templateHelper');
var util = require('util');
var ua = require('ua');

function Biz() {
	var $body = $('body');
	//var tpl = require('../tpl/demo.tpl')({a: Date.now()});
	//var css = require('../css/demo.scss');
	//var json = require('../json/demo.json');

	alert(ua.isUc());
}
new Biz();
