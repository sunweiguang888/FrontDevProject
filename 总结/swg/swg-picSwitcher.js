/**
 * 初始化轮播图
 * @param param
 * html:
     <div class="swg-picSwitcher">
     <div class="leftButton"></div>
     <ul class="pic">
     <li><img src="../images/switch_02.jpg" alt=""></li>
     <li><img src="../images/switch_01.png" alt=""></li>
     <li><img src="../images/switch_01.png" alt=""></li>
     </ul>
     <div class="rightButton"></div>
     <div class="light" data-pic="../images/swg-picSwitcher-light.png" data-currentPic="../images/swg-picSwitcher-lightCurrent.png"></div>
     </div>
 * js调用方法：
 * swg.initFocusPic({
        speed: 20,//每毫秒移动距离
        direction: "right",//移动方向(left,right)
        interval: 3000,//多少毫秒换一次图片
        showLight: true//是否显示指示灯
    });
 */
swg.initPicSwitcher = function(param){
    //设置默认值
    param.interval = param.interval ? param.interval : 3000;
    param.speed = param.speed ? param.speed : 20;
    param.direction = param.direction ? param.direction : "right";
    if(param.direction == "right"){
        param.direction = picMoveLeft;
    }else if(param.direction == "left"){
        param.direction = picMoveRight;
    }
    param.showLight = param.showLight !== true ? param.showLight : true;
    /*设置变量*/
    var speed = 20;
    var interval = null;
    /*获取变量*/
    var $switcher = swg.$(".swg-picSwitcher");
    var $pic = $switcher.children(".pic");
    var $picLi = $pic.children("li");
    var style = $picLi[0].style;
    style.marginLeft = 0;
    /*图片垂直居中*/
    $picLi.prepend("<span>&nbsp;</span>");
    /*设置属性*/
    $pic.attr("count", $picLi.length);
    $pic.attr("current", 0);
    $pic.attr("width", $pic[0].clientWidth);
    /*向左移动一张图片*/
    function picMoveLeft(){
        if(interval) return;
        if($pic.attr("current") < $pic.attr("count") - 1){
            var currentMarginLeft = parseInt(style.marginLeft ? style.marginLeft : 0);//获取当前margin-left值
            var targetMarginLeft = currentMarginLeft - parseInt($pic.attr("width"));;//计算本次移动最终margin-left的值
            interval = setInterval(function(){//开始移动
                currentMarginLeft = parseInt(style.marginLeft ? style.marginLeft : 0);
                if(targetMarginLeft < currentMarginLeft){//未到终点
                    if(targetMarginLeft < currentMarginLeft - param.speed){//本次移动未超出范围
                        style.marginLeft = swg.numToPx(currentMarginLeft - param.speed);
                    }else{//本次移动超出范围
                        style.marginLeft = swg.numToPx(targetMarginLeft);
                    }
                }else{//已到终点
                    clearInterval(interval);
                    interval = null;
                    $pic.attr("current", $pic.attr("current")*1 + 1);
                    setHighLight();
                }
            }, 1);
        }else{
            $pic.attr("current", 0);
            style.marginLeft = 0;
            setHighLight();
        }
    }
    /*向左移动一张图片*/
    function picMoveRight(){
        if(interval) return;
        if($pic.attr("current") > 0){
            var currentMarginLeft = parseInt(style.marginLeft ? style.marginLeft : 0);//获取当前margin-left值
            var targetMarginLeft = currentMarginLeft + parseInt($pic.attr("width"));;//计算本次移动最终margin-left的值
            interval = setInterval(function(){//开始移动
                currentMarginLeft = parseInt(style.marginLeft ? style.marginLeft : 0);
                if(targetMarginLeft > currentMarginLeft){//未到终点
                    if(targetMarginLeft > currentMarginLeft + param.speed){//本次移动未超出范围
                        style.marginLeft = swg.numToPx(currentMarginLeft + param.speed);
                    }else{//本次移动超出范围
                        style.marginLeft = swg.numToPx(targetMarginLeft);
                    }
                }else{//已到终点
                    clearInterval(interval);
                    interval = null;
                    $pic.attr("current", $pic.attr("current")*1 - 1);
                    setHighLight();
                }
            }, 1);
        }else{
            $pic.attr("current", $pic.attr("count") - 1);
            style.marginLeft = swg.numToPx(- ($pic.attr("count") - 1) * $pic.attr("width"));
            setHighLight();
        }
    }
    /*为左|右移动按钮绑定事件*/
    swg.$(".swg-picSwitcher .leftButton").click(picMoveRight);
    swg.$(".swg-picSwitcher .rightButton").click(picMoveLeft);
    /*移动到指定图片*/
    function picMoveToIndex(index){
        style.marginLeft = swg.numToPx(- (index * $pic.attr("width")));
        $pic.attr("current", index);
        setHighLight();
    }
    /*添加指示灯*/
    var $light = swg.$(".swg-picSwitcher .light");
    if(!param.showLight){
        $light[0].style.display = "none";
    }
    (function(){
        var html = "";
        for(var i=0;i<$pic.attr("count");i++){
            html += '<img src="" data-index="'+i+'"/>';
        }
        $light.append(html);
    })();
    /*设置指示灯*/
    var data_pic = $light.attr("data-pic");
    var data_currentPic = $light.attr("data-currentPic");
    var $lights = swg.$(".swg-picSwitcher .light img");
    function setHighLight(){
        var current = $pic.attr("current");
        $lights.each(function(i){
            if(i == current){
                swg.$(this).attr("src", data_currentPic);
            }else{
                swg.$(this).attr("src", data_pic);
            }
        })
    };
    setHighLight();
    /*鼠标划过指示灯，设置图片*/
    $lights.mouseenter(function(){
        clearInterval(moveInterval);
        var dataIndex = swg.$(this).attr("data-index");
        picMoveToIndex(dataIndex);
    })
    $lights.mouseleave(function(){
        moveInterval = setInterval(param.direction, param.interval);
    })
    /*每隔几秒移动一次*/
    var moveInterval = setInterval(param.direction, param.interval);
}

