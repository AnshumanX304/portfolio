var idnight=NULL;
var idday=NULL;
var idday2=null;
function takemetospace()
{
    document.getElementById("all").classList.remove("normalbackground");
    document.getElementById("all").classList.remove("backgroundsky");
    const list = document.getElementById("all").classList;
    list.add("background");

    var i=0;
    clearInterval(idnight);
    idnight=setInterval(x,10);
    function x()
    {
        document.querySelector(".background").style.backgroundPosition=i+'px';
        i--;
    }
    
}
function takemetosky()
{
    document.getElementById("all").classList.remove("normalbackground");
    document.getElementById("all").classList.remove("background");
    const list = document.getElementById("all").classList;
    list.add("backgroundsky");

    var i=0;

    clearInterval(idday);
    idday=setInterval(x,10);
    function x()
    {
        document.querySelector(".backgroundsky").style.backgroundPosition=i+'px';
        i--;
    }

    

}
function talknojutsu()
{
    document.getElementById("all").classList.remove("backgroundsky");
    document.getElementById("all").classList.remove("background");
    const list = document.getElementById("all").classList;
    list.add("normalbackground");
    
}
function movesky()
{
    var i=0;
    clearInterval(idday2);
    idday2=setInterval(x,10);
    function x()
    {
        document.querySelector(".container1").style.backgroundPositionY = i+'px'; 
        i++;
    }
   
}
