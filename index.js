function takemetospace()
{
    document.getElementById("all").classList.remove("normalbackground");
    document.getElementById("all").classList.remove("backgroundsky");

    const list = document.getElementById("all").classList;
    list.add("background");

//    var i=0;
//    function x(){
//       i--;
//       document.getElementsByClassName("background").style.backgroundPosition=i+"px";
//    }
//    setInterval(x,5);
}
function takemetosky()
{
    document.getElementById("all").classList.remove("normalbackground");
    document.getElementById("all").classList.remove("background");
    const list = document.getElementById("all").classList;
    list.add("backgroundsky");


}
function talknojutsu()
{
    document.getElementById("all").classList.remove("backgroundsky");
    document.getElementById("all").classList.remove("background");
    const list = document.getElementById("all").classList;
    list.add("normalbackground");
}