window.onload=function(){
    var spans=document.querySelectorAll("span");
    var startTime=new Date();
       let timeInterval=setInterval(()=>{
        var meridians;  
         var currentTime=new Date();
        var hours= currentTime.getHours();
       var minutes=currentTime.getMinutes();
       var seconds=currentTime.getSeconds();
       if(Number(hours)>=12)
       {
           meridians="PM";
          hours=hours-12;
       } 
       else{
           meridian="AM";
       }; 
       if(Number(hours)==0||Number(hours)<10)
       {
           hours="0"+hours;
       }
       if(Number(minutes)==0||Number(minutes)<10)
       {
           minutes="0"+minutes;
       }
       if(Number(seconds)==0||Number(seconds)<10)
       {
           seconds="0"+seconds;
       }

       
       spans[0].innerHTML=hours+":";

       
       spans[1].innerHTML=minutes+":";

       
       spans[2].innerHTML=seconds;

       
       spans[3].innerHTML=meridians;

     },1000)

};