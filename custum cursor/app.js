var a=document.querySelector(".main");
var b=document.querySelector("#cursor");

a.addEventListener("mousemove",function(c){
    console.log(c)
    b.style.left = c.x+"px";
    b.style.top = c.y+"px";


})
