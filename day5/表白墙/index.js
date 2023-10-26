var btn=document.getElementById("musicBtn")
btn.onclick=function(){
    var music=document.getElementById("music");
    if(music.paused){
        music.play();
        btn.src="./imags/musicBtn.png"
    }else{
        music.pause();
        btn.src="./images/musicBtnOFF.png"
    }
}   

var elope=document.getElementById("elope");
elope.onclick=function(){
    window.location="./content.html"
}