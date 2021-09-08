let deadlinedate= new Date(2021,9,6,12) ;
 let displayer=document.querySelectorAll(".displayer");

 let days,hours,minutes,seconds; 
 let interval= setInterval(()=>
 {
   if(days<=0&&hours<=0&&minutes<=0&&seconds<=0) 
   {    
      // days=0;
      // hours=0;
      // minutes=0;
      // seconds=0;
      displayer.forEach((val)=>{ 
         
      console.log("hello");
      })
     clearInterval(interval);  
} 
    
    let currentdate=new Date();
    datediff=deadlinedate-currentdate;  
   //  let date=new Date(datediff);
    days=Math.trunc(datediff/(24*60*60*1000)); 
    let remainingmsecs=datediff % (24*60*60*1000);
    hours=Math.trunc(remainingmsecs/(3600000));
    remainingmsecs=remainingmsecs%3600000;
    minutes=Math.trunc(remainingmsecs/60000);
    remainingmsecs=remainingmsecs%60000;
    seconds=Math.trunc(remainingmsecs/1000) ;

    
        displayer[0].innerHTML=days;
        displayer[1].innerHTML= hours;
        displayer[2].innerHTML= minutes; 
        displayer[3].innerHTML= seconds; 
        
    
   

 },1000);   
   
