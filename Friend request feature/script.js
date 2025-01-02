let btn=document.querySelector("button")
let a=1;
btn.addEventListener("click",()=>{
    if(a==1){
        btn.innerText="Following"
        btn.style.backgroundColor="transparent"
        btn.style.color="white";


        a=0

    }else{
        btn.innerText="Follow"
        btn.style.backgroundColor="#0095f6"
        btn.style.color="White";
        a=1
    }
    
})    


 
