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
window.swg = window.swg || {};
/*初始化焦点图*/
(swg.initFocusPic = function(){
    //获取所有焦点图
    var widgets = document.querySelectorAll(".swg-jigsaw");
    for(var i=0;i<widgets.length;i++){
        (function(){
            var width = "50px",
                height = "40px",
                num = 9,
                widget = widgets[i],
                $widget = swg(widget)
                ;
            var html = "";
            for(var j=0;j<num;j++){
                html += '<li style="width: '+width+';height: '+height+';margin: 10px;"></li>';
            }
            widget.innerHTML = html;
            widget.style.width = 3 * $widget.children(":first-of-type")[0].clientWidth;
            debugger
        })();
    }
})();