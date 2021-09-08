
     arrayofcolours=["rgba(133,122,200,1)","f15025",
     "Red","green"]; 
 backgroundChanger=()=>
 { 
    let main=document.getElementById("main");
     
    let colorname=document.getElementById("color");
   
       let curerentcolor=arrayofcolours
       [Math.floor(Math.random()*arrayofcolours
       .length)]; 
    colorname.innerHTML=curerentcolor;
    main.style.backgroundColor= curerentcolor;
 }; 
 