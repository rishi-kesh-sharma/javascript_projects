 let btns=document.querySelectorAll(".icon");
 console.log(btns);
 let sidebar=document.querySelector(".containersidebar");
 btns.forEach((btn) => {
    btn.addEventListener("click",()=>
    { 
        console.log(sidebar.classList);
        sidebar.classList.toggle("opened");
    })
 }); 
 