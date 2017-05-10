var nowTime=new Date();//获取当前时间
$(".left").click(function () {
    if(new Date()-nowTime>500){
        move(false);
        nowTime=new Date();
    }
});//点击左按钮
$(".right").click(function () {
    if(new Date()-nowTime>500){
        move(true);
        nowTime=new Date();
    }
});//点击右按钮

function move(direction){
    var arrW=[];//用这些数组存放 宽，高，left，Top z-index opacity 先定义为空
    var arrH=[];
    var arrL=[];
    var arrT=[];
    var arrZ=[];
    var arrO=[];
    $("#banner ul li").each(function (i) {//找到每一个Li的 宽，高，left，Top z-index opacity样式存放在对应数组中
        arrW[i]= $(this).css("width");
        arrH[i]= $(this).css("height");
        arrT[i]= $(this).css("top");
        arrL[i]= $(this).css("left");
        arrZ[i]= $(this).css("z-index");
        arrO[i]= $(this).css("opacity");
    });

    $("#banner ul li").each(function (i) {
        var index;//定义一个变量存放索引值
        if(direction){//代表如果为true
            index=i-1;
            if(index<0){
                index=3;
            }
            $(this).css("z-index",arrZ[index]);
            $(this).animate({
                width:arrW[index],
                height:arrH[index],
                left:arrL[index],
                top:arrT[index],
                opacity:arrO[index]
            },500)
        }//右交换
        else{
            index=i+1;
            if(index>3){
                index=0;
            }
            $(this).css("z-index",arrZ[index]);
            $(this).animate({
                width:arrW[index],
                height:arrH[index],
                left:arrL[index],
                top:arrT[index],
                opacity:arrO[index]
            },500)
        }//左交换
    });
}
