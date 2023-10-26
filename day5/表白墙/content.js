//创建一个即将要读取的字符串
var str="曾经有一份真诚的爱情放在我面前，我没有珍惜，等到我失去的时候才后悔莫及，人世间最痛苦的事莫过于此..... 如果上天能够给我一个再来一次的机会，我会对那个女孩子说三个字：“我爱你。” 如果非要在这份爱上加上一个期限，我希望是......一万年！";
//用来读取
var i=0;
//定义定时器
var timer
//设置定时器
timer=setInterval(start,100)
//封装函数,读取字符串
function start(){
    //获取呈现内容的盒子
    var con=document.getElementById("content")
    //显示字符串,chartAT用来获取字符串中指定的字符
    con.innerHTML+=str.charAt(i)
    i++;
    if(i==str.length){
        //清除定时器
        clearInterval(timer)
    }
}
var no=document.getElementById("no");
var count=0;
no.onclick=function(){
    count++;
    var Bottom=Math.floor(Math.random()*100)
    var Left=Math.floor(Math.random()*100)
    no.style.bottom=Bottom+"%";
    no.style.left=Left+"%"
    if(count==1){
        alert("我这么优秀，你确定要失去？")
    }
    if(count==2){
        alert("放弃我，你会后悔的！")
    }
    if(count==3){
        alert("再考虑一下啦！")
    }
}
var yes=document.getElementById("yes")
yes.onclick=function(){
    window.location="./love.html"
}
