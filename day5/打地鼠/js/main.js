

//jQuery是一个js库，它为我们封装了许多繁琐而常用的功能，只需要调用它内部的方法就能轻松实现酷炫的效果。
//jQuery基本语法:$(selecter).action();
//1、使用美元符号定义jQuery函数；
//2、selecter为选择器，
//jQuery完全兼容css选择器，也就是标签、id、类型选择器；
//3、action()为要执行的函数；
//jQuery动画有两种，一种支持回调，一种不支持回调，回调会在动画执行结束之后出发，
//所以当我们需要在动画执行结束之后调用某一方法时（如执行另一段动画），需要只用支持回调的动画方法，
//下面demo中注释掉的三句为不支持回调的动画方法，当定义多个不支持回调的动画时，动画会同时执行，无先后效果。
    
$(document).ready(function(e){
	var gamediv = document.getElementById("gameDiv");
	
	setInterval(function(){
//		产生一个0~8的数字
		var x = Math.random()*8;
//		取整数
		x = Math.round(x);
//		取整数的子类
		var img = gamediv.children[x];
//		变成地鼠路径
		img.src = "img/2.gif";
		
//		再一次随机取值
		x = Math.random()*8;
		x = Math.round(x);
		img = gamediv.children[x];
		img.src = "img/5.jpg";
	},1000);
});
//设置一个x来计算分数
var x = 0;

function beat(obj)
{
//	取出图片路径
	var srcstr = obj.src;
//	截取倒数四个字符，比较是否为地鼠
//若是地鼠，则变为草丛，分数加1
	if(srcstr.charAt(srcstr.length-5) == "2")
	{
		obj.src = "img/5.jpg";
		x++;
//		通过id，找到计分的p标签
		document.getElementById("source").innerHTML="得分："+x;
	}
}


