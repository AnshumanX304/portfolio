var i=0;
function x(){
    i--;
    document.getElementById("background").style.backgroundPosition=i+"px";
}
setInterval(x,5);