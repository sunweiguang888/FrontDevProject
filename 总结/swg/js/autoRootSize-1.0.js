/**
 * Created by sunwg on 2015/5/20.
 */

/*动态设置根节点font-size*/
/*window.onresize = (function(){
    var ratio = 16;//iphone 4,root初始大小为24px
    var viewPortWidth = document.documentElement.clientWidth;//window.screen.width;不准//document.getElementsByTagName("body")[0].clientWidth;
    document.getElementsByTagName("html")[0].style.fontSize = (viewPortWidth / ratio) + "px";
    return arguments.callee;
})();*/
window.addEventListener('resize', (function(){
	var ratio = 32;		// 比率（iphone 4时屏幕宽度为320px, 为使根元素初始大小为10px，故设该比率)
	var viewPortWidth = document.documentElement.clientWidth;
	document.documentElement.style.fontSize = (viewPortWidth / ratio) + "px";
	return arguments.callee;
})(), false);