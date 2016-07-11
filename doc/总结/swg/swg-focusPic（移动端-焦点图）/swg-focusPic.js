/**
 * 初始化焦点图
 * @param param
 * html:
 <div class="swg-focusPic">
 <ul>
 <li>
 <a href="">
 <img src="./images/img_01.jpg"/>
 </a>
 </li>
 <li>
 <a href="">
 <img src="./images/img_02.jpg"/>
 </a>
 </li>
 <li>
 <a href="">
 <img src="./images/img_03.jpg"/>
 </a>
 </li>
 </ul>
 <div class="lights" data-srcNormal="./images/light_01.png" data-srcCurrent="./images/light_02.png"></div>
 </div>
 * 引入时会自动初始化一次，之后也可用js手动调用：
 * swg.initTouchScrollPic();
 */
swg = typeof swg != "undefined" ? swg : {};
/*初始化焦点图*/
(swg.initFocusPic = function(){
    //获取所有焦点图
    var widgets = document.querySelectorAll(".swg-focusPic");
    for(var i=0;i<widgets.length;i++){
        (function(){
            var widget = widgets[i],
                ul = widget.querySelector("ul"),
                lightDiv = widget.querySelector(".lights"),
                lis = ul.querySelectorAll("li"),
                num = lis.length;

            //将第一个图片添加至结尾
            if(lis.length > 1){
                ul.innerHTML += lis[0].outerHTML;
            }
            lis = ul.querySelectorAll("li");

            //设置li宽度为控件宽度
            for(var j=0;j<lis.length;j++){
                lis[j].style.width = widget.clientWidth + "px";
            }

            var widgetWidth = widget.clientWidth,
                ulWidth = ul.clientWidth;

            //设置当前显示图片的data-index
            ul.setAttribute("data-index", "0");

            //获取普通和高亮指示灯的地址
            var lightSrcNormal = lightDiv.getAttribute("data-srcNormal");
            var lightSrcCurrent = lightDiv.getAttribute("data-srcCurrent");

            //生成与图片数量相等的指示灯，设置第一个灯为亮的
            var lightsHtml = "";
            for(var k=0;k<num;k++){
                if(k === 0){
                    lightsHtml += '<img src="'+lightSrcCurrent+'"/>';
                }else{
                    lightsHtml += '<img src="'+lightSrcNormal+'"/>';
                }
            }
            lightDiv.innerHTML = lightsHtml;

            //如果数量小于等于1，不轮播
            if(lis.length <= 1) return;

            //开始设置轮播内容
            num += 1;
            var maxTranslateX = 0,
                minTranslateX = widgetWidth - ulWidth;

            //获取指示灯图片
            var lightImgs = lightDiv.querySelectorAll("img");

            //设置高亮指示灯
            var setLightCurrent = function(){
                var index = ul.getAttribute("data-index") * 1;
                for(var i=0;i<lightImgs.length;i++){
                    var lightImg = lightImgs[i];
                    if(i === index){
                        lightImg.setAttribute("src", lightSrcCurrent);
                    }else{
                        lightImg.setAttribute("src", lightSrcNormal);
                    }
                }
                //最后一张图片与第一张共用第一个指示灯
                if(index === num - 1){
                    lightImgs[0].setAttribute("src", lightSrcCurrent);
                }
            };

            /*获取节点translateX的值*/
            function getTranslateX(node){
                return node.style.transform ? /translateX\(([^)]*)px\)/.exec(node.style.transform)[1] * 1 : 0;
            }

            //设置
            var speed = 1000;
            //自动滚动间隔
            var interval = 5000;

            //显示下一张图片（向左滚动）
            function next(hand){
                //新的translateX
                var translateX = getTranslateX(ul) + widgetWidth;

                //获取当前index
                var index = ul.getAttribute("data-index") * 1;

                //如果是手指拨动，则只能拨动到最后一张
                if(hand && index === num - 2){
                    return;
                }

                //重置，轮播图居左，index为0
                if(index === num - 1){
                    ul.style.webkitTransition = "0s";
                    ul.style.transitionDuration = "0s";
                    ul.style.webkitTransform = "translateX("+maxTranslateX+"px)";
                    ul.style.transform = "translateX("+maxTranslateX+"px)";
                    index = 0;
                }

                //新的translateX
                translateX = - widgetWidth * (index + 1);

                //100ms后开始动画效果，因为前面的居左操作会有延迟
                setTimeout(function(){
                    ul.style.webkitTransition = speed / 1000 + "s";
                    ul.style.transitionDuration = speed / 1000 + "s";
                    ul.style.webkitTransform = "translateX("+translateX+"px)";
                    ul.style.transform = "translateX("+translateX+"px)";

                    //设置data-index
                    ul.setAttribute("data-index", (++ index).toString());

                    setLightCurrent();
                }, 100);
            }

            //显示上一张图片（向右滚动）
            function before(hand){
                //新的translateX
                var translateX = getTranslateX(ul) + widgetWidth;

                //获取当前index
                var index = ul.getAttribute("data-index") * 1;

                //如果是手指拨动，则只能拨动到最后一张
                if(hand && index === 0){
                    return;
                }

                //重置，轮播图居左，index为0
                //与before()不同
                if(index === 0){
                    ul.style.webkitTransition = "0s";
                    ul.style.transitionDuration = "0s";
                    ul.style.webkitTransform = "translateX("+minTranslateX+"px)";
                    ul.style.transform = "translateX("+minTranslateX+"px)";
                    index = num - 1;
                }

                //新的translateX
                //与before()不同
                translateX = - widgetWidth * (index - 1);

                //100ms后开始动画效果，因为前面的居左操作会有延迟
                setTimeout(function(){
                    ul.style.webkitTransition = speed / 1000 + "s";
                    ul.style.transitionDuration = speed / 1000 + "s";
                    ul.style.webkitTransform = "translateX("+translateX+"px)";
                    ul.style.transform = "translateX("+translateX+"px)";

                    //设置data-index
                    ul.setAttribute("data-index", (-- index).toString());

                    setLightCurrent();

                }, 100);
            }

            //自动滚动，每3秒一次
            function resetAutoScroll(){
                clearInterval(resetAutoScroll.interval);
                resetAutoScroll.interval = setInterval(next, interval);
            }
            if(lis.length > 1){
                resetAutoScroll();
            }

            //手动滚动
            var startX;

            //滑动开始
            widget.addEventListener("touchstart", function(event){
                //记录开始位置
                startX = event["changedTouches"][0].clientX;
                //阻止浏览器默认的滑屏事件
                event.preventDefault();
            });

            //滑动结束
            widget.addEventListener("touchend", function(event){
                //判断滑动方向
                var offsetX = event["changedTouches"][0].clientX - startX;
                if(offsetX < 0){
                    //向左滑动
                    next(true);
                    resetAutoScroll();
                }else if(offsetX > 0){
                    //向右滑动
                    before(true);
                    resetAutoScroll();
                }else{
                    //断定是鼠标点击事件
                    this.click();
                }
            });
        })();
    }
})();