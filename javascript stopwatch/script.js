let start=document.querySelector(".start");
let stop=document.querySelector(".stop");
let reset=document.querySelector(".reset");
let timeContainer=document.querySelector(".time-container");
start.addEventListener("click",()=>{
     var date=new Date();
     console.log();
     var time=date.getTime();
      var timeInterval=setInterval(()=>{
          let currentTime=new Date().getTime();
          
        var timeDiff=currentTime-time;
        var newTime=new Date(timeDiff);
       var hours= Math.abs(Number(newTime.getHours())-5);
       if(Number(hours)==0 ||Number(hours)<10){
           hours="0"+hours;
       }

       var minutes=Math.abs(Number(newTime.getMinutes())-30);
    
       if(Number(minutes)==0 ||Number(minutes)<10) {
        minutes="0"+minutes; 
    }
    var seconds=Math.abs(newTime.getSeconds()-0 ); 
        
       if(Number(seconds)==0 ||Number(seconds)<10) {
        seconds="0"+seconds;
        console.log("hello");
    } console.log(seconds);
       var milliseconds=Math.abs(newTime.getMilliseconds()); 
        milliseconds=milliseconds.toFixed(0);
     timeContainer.innerHTML=`${hours}:${minutes}:${seconds}:${milliseconds}`;
      },1);
      stop.addEventListener("click",()=>{
          clearInterval(timeInterval);
      })
      reset.addEventListener("click",()=>{
          timeContainer.innerHTML="00:00:00:000";
      })

}); 
let i="rishi";
let j=i.replace("karune");
console.log(j);
