let btns=document.querySelectorAll(".navitem");
let menuitems=document.querySelectorAll(".menuitem");
 
   
btns.forEach((btn)=> { 
    btn.addEventListener('click',()=>{
         
        menuitems.forEach((menuitem)=>{
            
            if((menuitem.classList.contains(btn.classList[1])))
            { 
                menuitem.style.display="flex";
            }
            else{
                menuitem.style.display="none";
            }
         
        })
    })
    
});