let count=0;
function operator(e){
   
    let reset=document.getElementById("reset");
    let decrease=document.getElementById("decrease");
    let increase=document.getElementById("increase");
    let number=document.getElementById("number");
   
    if(e.id=="reset")
    {  
        count=0;
    }
    else if(e.id=="decrease")
    { 
        count=count-1; 

    }
    else{
        count++;
    }
    
    number.innerHTML=count;
     if(count<0){
        number.style.color="red";
      }
      else
      {
          number.style.color="black";
      }
    
      
    
}