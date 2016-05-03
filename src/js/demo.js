/**
 * Created by weiguangsun on 2016/4/21.
 */
function Demo() {
    this.name = '哈哈哈';
    var tpl = require('../tpl/demo.tpl')({a: '威风威风'});
	require('../scss/demo.scss');
    var json = require('../json/demo.json');

    /*var png = require('../image/demo.png');
    var img = document.createElement('img');
    img.src = png;
    document.body.appendChild(img);*/

	debugger
};
new Demo();