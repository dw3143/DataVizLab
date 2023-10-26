var lastIndex = 0;
//1.点击开始按钮
function start(obj){
//	设置一个定时器
//参数1、要执行的函数名，
//参数2、间隔时间，单位毫秒
	setInterval(timer,1000);
}

function timer(){
//	随机产生一个0~8的数字
//random()[0,1) 产生[0,7]不包含8，
//随后进行4舍5入，可以取到8
	var temp = Math.random()*8;
//	四舍五入 获取整数
	var index = Math.round(temp);
	
//	通过系统的document对象，获取到某个元素
	var contentDiv = document.getElementById("gameDiv");
//	取到相应的子类
	var child = contentDiv.children[index];
//	将草坪路径替换成地鼠路径
	child.src = "img/2.gif";
//	判断上一次和本次是否为同一个位置
	if(lastIndex!=index){
//		获取上一次改变的元素
		var lastChild = contentDiv.children[lastIndex];
		lastChild.src = "img/5.jpg";
	}
		
//	将本次的下标交给 记录上一次下标的变量
	lastIndex = index;
}

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
//	通过id，找到计分的p标签
		document.getElementById("source").innerHTML="得分："+x;
	}
}











