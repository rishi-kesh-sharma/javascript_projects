let tabbtns=document.querySelectorAll(".tabbtn");
let tabs=document.querySelectorAll(".tab"); 
tabbtns.forEach((tabbtn) => {  
   tabbtn.addEventListener("click",(e)=>{
       tabs.forEach((tab)=>{
            //  if(tab.classList[1]==e.target.classList[0]){
            //    tab.style.display="block";
            //    console.log(tab.classList[1])
            //  }
            //  else{
            //      tab.style.display="none";
            //  }
            if(tab.classList.contains(e.target.classList[0])){
                tab.style.display="block";
            }
            else{
                tab.style.display="none"
            }
       })
   })
}) ; 
/*
tab.classList.add("closedtab");
tabbtn.classList.add("closedtabbtn");
*/
