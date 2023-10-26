function start(obj){
    setInterval(timer,800)
}

function timer(){
    // 随机产生一个数0-7
    // Math.random()
    var temp=Math.random()*8;
    var index=Math.random(temp)
    document.getElementById("gamediv")
    var child=contentdiv.children[index];
    child.src="./img/2.gif";
    if(lastindex!=index){
        var lastchild=contentdiv.children[lastindex];
        lastchild.src="./img/5.jpg";
    }
    lastindex=index
}
console.log(Math.random()*8)