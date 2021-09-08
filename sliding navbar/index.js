 let btn=document.querySelector(".icon");
 let container=document.querySelector(".container");
 btn.addEventListener("click",()=>
 {
    container.classList.toggle("opened");
    
    if(container.classList.contains("opened") )
    { 
    btn.innerHTML="-";
    }
    else{
        btn.innerHTML="+";
    }
   
 })
