var rows = 30;
var cols = 40;
var blockSize = 20;
var ctx;

// 存放蛇身位置的数组
var snakes = [];
//  1  left    2    up    3    right    4    down
var decration = 3;
// 存放食物位置
var food;
// 定时器
var interval;

window.onload = function() {

	var canvas = document.getElementById("snake");
	ctx = canvas.getContext("2d");
	initSnakes();
	initFood();
	draw();

	interval =  setInterval(move, 50);

	document.onkeydown = function(event) {
		// ASCII 码  3
		console.log(event.keyCode);
		keyCode(event.keyCode);
	}
}

function initSnakes() {
	for(var i = 0; i < 4; i++) {
		snakes[i] = {
			x: i * blockSize,
			y: 0
		};
	}
}

function initFood(){
	// 初始化食物
	food = {
		x: Math.floor(Math.random()*cols)*blockSize,
		y: Math.floor(Math.random()*rows)*blockSize
	};
}

function draw() {
	// 每次绘制图形之前清空画布
	ctx.clearRect(0, 0, cols * blockSize, rows * blockSize);
	ctx.strokeStyle = "white";
	ctx.lineWidth = 1;
	// 绘制横线
	for(var i = 0; i <= rows; i++) {
		ctx.beginPath();
		ctx.moveTo(0, i * blockSize);
		ctx.lineTo(cols * blockSize, i * blockSize);
		ctx.stroke();
	}
	// 绘制竖线
	for(var i = 0; i <= cols; i++) {
		ctx.beginPath();
		ctx.moveTo(i * blockSize, 0);
		ctx.lineTo(i * blockSize, rows * blockSize);
		ctx.stroke();
	}

	// 绘制蛇身
	for(var i = 0; i < snakes.length; i++) {
		ctx.fillStyle = "green";
		ctx.beginPath();
		ctx.moveTo(snakes[i].x, snakes[i].y);
		ctx.lineTo(snakes[i].x + blockSize, snakes[i].y);
		ctx.lineTo(snakes[i].x + blockSize, snakes[i].y + blockSize);
		ctx.lineTo(snakes[i].x, snakes[i].y + blockSize);
		ctx.closePath();
		ctx.fill();
		ctx.strokeStyle = "yellow";
		ctx.stroke();
	}
	
	//绘制食物
	ctx.fillStyle = "yellow";
	ctx.beginPath();
	ctx.moveTo(food.x,food.y);
	ctx.lineTo(food.x+blockSize,food.y);
	ctx.lineTo(food.x+blockSize,food.y+blockSize);
	ctx.lineTo(food.x,food.y+blockSize);
	ctx.closePath();
	ctx.fill();
	ctx.strokeStyle = "red";
	ctx.stroke();
}

function move() {
	switch(decration) {
		case 1:
			var offsetX = (snakes[snakes.length - 1].x - blockSize + cols * blockSize) % (cols * blockSize);
			snakes.push({
				x: offsetX,
				y: snakes[snakes.length - 1].y
			});
			break;
		case 2:
			var offsetY = (snakes[snakes.length - 1].y - blockSize + rows * blockSize) % (rows * blockSize);
			snakes.push({
				x: snakes[snakes.length - 1].x,
				y: offsetY
			});
			break;
		case 3:
			var offsetX = (snakes[snakes.length - 1].x + blockSize) % (cols * blockSize);
			// 向数组末尾添加元素
			snakes.push({
				x: offsetX,
				y: snakes[snakes.length - 1].y
			});
			break;
		case 4:
			var offsetY = (snakes[snakes.length - 1].y + blockSize) % (rows * blockSize);
			snakes.push({
				x: snakes[snakes.length - 1].x,
				y: offsetY
			});
			break;
	}
	eatFood();
	// 删除数组头部的元素
	snakes.shift();
	
	if (gameIsOver()) {
		clearInterval(interval);
	}
	
	draw();
}

function keyCode(code) {
	switch(code) {
		case 37:
			if(decration == 2 || decration == 4) {
				decration = 1;
			}
			break;
		case 38:
			if(decration == 1 || decration == 3) {
				decration = 2;
			}
			break;
		case 39:
			if(decration == 2 || decration == 4) {
				decration = 3;
			}
			break;
		case 40:
			if(decration == 1 || decration == 3) {
				decration = 4;
			}
			break;
	}
}

function eatFood(){
	if(snakes[snakes.length-1].x == food.x && snakes[snakes.length-1].y == food.y){
		// 向数组头部添加元素
		snakes.unshift({x:0,y:0});
		// 食物重新产生
		initFood();
	}
}

function gameIsOver(){
	for(var i=0;i<snakes.length-1;i++){
		if(snakes[snakes.length-1].x == snakes[i].x && snakes[snakes.length-1].y == snakes[i].y){
			return true;
		}
	}
	return false;
}




