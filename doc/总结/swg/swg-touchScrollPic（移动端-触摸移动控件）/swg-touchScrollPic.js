/**
 * 初始化触摸滚动图
 * @param param
 * html:
 <div class="swg-touchScrollPic">
 <ul>
 <li><img src="http://i2.shouyou.itc.cn/app/uploads/2015/01/14209778725853.jpg"/></li>
 <li><img src="http://i2.shouyou.itc.cn/app/uploads/2015/01/14209778725853.jpg"/></li>
 <li><img src="http://i2.shouyou.itc.cn/app/uploads/2015/01/14209778725853.jpg"/></li>
 <li><img src="http://i2.shouyou.itc.cn/app/uploads/2015/01/14209778725853.jpg"/></li>
 </ul>
 </div>
 * 引入时会自动初始化一次，之后也可用js手动调用：
 * swg.initTouchScrollPic();
 */
swg = typeof swg != "undefined" ? swg : {};
/*初始化所有滚动图片*/
swg.initTouchScrollPic = function(){
    /*获取触摸事件中鼠标的x坐标，changedTouches是touchend中的属性*/
    var getX = function(event){
        return event["touches"][0] ? event["touches"][0].clientX : event["changedTouches"][0].clientX;
    };
    /*px转数字*/
    var pxToNum = function(px){
        if(px === ""){
            return 0;
        }else{
            return px.replace("px", "") * 1;
        }
    };
    /*数字转px*/
    var numToPx = function(num){
        return num + "px";
    };
    /*js动画效果-水平滚动*/
    function animateX(node, finishMarginLeft, speed){
        //水平移动矢量值
        var x = finishMarginLeft - pxToNum(node.style.marginLeft);
        //到达目的地距离，取绝对值
        var distance = Math.abs(x);
        //动画开始，为动画节点添加interval属性
        node.swgAnimateInterval = setInterval(function(){
            //每次移动的距离，随着距离越小速度则越小，最小值是0.1px
            var step = distance / 50 > speed ? distance / 50 : speed;
            //距离减少step长度
            distance -= step;
            //step变为矢量值
            step = x > 0 ? step : - step;
            //本次marginLeft
            var marginLeft = pxToNum(node.style.marginLeft) + step;
            //如果本次marginLeft超出边界，则值为finishMarginLeft
            if(x > 0 && marginLeft > finishMarginLeft || x < 0 && marginLeft < finishMarginLeft){
                marginLeft = finishMarginLeft;
            }
            //设置marginLeft
            node.style.marginLeft = numToPx(marginLeft);
            //如果到达，则清除动画
            if(distance <= 0){
                clearInterval(node.swgAnimateInterval)
            }
        }, 1)
    }
    //限制x取值范围范围
    var limitXScope = function(xScope, xMin, xMax){
        if(xScope < xMin){
            xScope = xMin;
        }else if(xScope > xMax) {
            xScope = xMax;
        }
        return xScope;
    };
    //获取所有控件
    var widgets = document.querySelectorAll(".swg-touchScrollPic");
    for(var i=0; i<widgets.length; i++){
        (function(){
            var widget = widgets[i];
            //上一次触发touch事件时，鼠标的x坐标
            var startX, lastX, startTime;
            //控件的ul
            var ul = widget.querySelector("ul");

            //如果图片宽度不超过屏幕宽度，则不滑动
            if(ul.clientWidth <= widget.clientWidth) return;

            var lis = ul.querySelectorAll("li");
            for(var j=0;j<lis.length;j++){
                var li = lis[j];
                li.style.width = numToPx(li.clientWidth);
            }
            //marginLeft的最小值，相当于图片移动到最左
            var minMarginLeft = widget.clientWidth - ul.clientWidth;

            //触摸开始，记录状态
            widget.addEventListener("touchstart" , function(event){
                //清除动画
                clearInterval(ul.swgAnimateInterval);
                //触摸事件开始时，记录鼠标的x坐标
                startX = lastX = getX(event);
                //触摸开始的时刻
                startTime = new Date();
            }, false);

            //触摸移动，根据手势移动
            widget.addEventListener("touchmove" , function(event){
                //矢量水平移动距离，
                var xPath = getX(event) - lastX;
                //新的marginLeft值
                var marginLeft = pxToNum(ul.style.marginLeft) + xPath;
                marginLeft = limitXScope(marginLeft, minMarginLeft, 0);
                //移动到新的位置
                ul.style.marginLeft = numToPx(marginLeft);
                //图片滚动后，记录鼠标的x坐标
                lastX = getX(event);
                event.preventDefault();
            }, false);

            //触摸结束，判断是否滚动
            widget.addEventListener("touchend" , function(event){
                //矢量水平移动距离，
                var xPath = getX(event) - startX;
                //触摸用时
                var time = new Date() - startTime;
                //触摸时间小于300ms时
                if(time < 300){
                    //根据触摸移动距离，滚动5倍的距离
                    var x = limitXScope(pxToNum(ul.style.marginLeft) + xPath * 5, minMarginLeft, 0);
                    animateX(ul, x, 1);
                }
                lastX = undefined;
            }, false);
        })();
    }
};
window.addEventListener("load", swg.initTouchScrollPic, false);