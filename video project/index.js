 let video=document.createElement("VIDEO");
 let container=document.createElement("div")
 let body=document.querySelector("body"); 
 
 body.setAttribute("height","100vh");
 body.setAttribute("width","100vw");
  
 let image=document.createElement("img");
 image.setAttribute("src","https://raw.githubusercontent.com/john-smilga/javascript-basic-projects/469042ea8e509b971deb123d946a62aaad1369ee/09-video/final/logo.svg");
 image.setAttribute("style","display:block;color:lightblue")
 body.appendChild(image);
 setTimeout(myfunction,2000);
 function myfunction()
 {
   let btn=document.createElement("div");
   let play=document.createElement("span");
   let pause=document.createElement("span");
   let toggle=document.createElement("span");
   
 body.setAttribute("style","background :black;opacity:0.4;background-clip:video;");
   container.appendChild(btn);
   btn.appendChild(play);
   btn.appendChild(pause);
   btn.appendChild(toggle);
   btn.setAttribute("style","z-index:10;cursor:pointer;width:100px ;height:30px;position:absolute;left:30px;bottom:50px;border:1px solid red;border-radius:10px")
   play.innerHTML="pause";
   pause.innerHTML="play";
   play.setAttribute("style","display:inline-block;margin-top: 5px;height:30px;width:50px;color:white;font-weight:bold;text-align:center;");
   pause.setAttribute("style","display:inline-block;margin-top:5px;height:30px;width:50px;color:white;font-weight:bold;text-align:center;");
   toggle.setAttribute("style","display:inline-block;height:30px;width:50px ; background-color:red;position:absolute;top:0px;right:0px;border-radius:10px");
 
     
    body.removeChild(image);
  video.setAttribute("src","video.mp4");
 
 video.setAttribute("autoplay","autoplay");
 video.setAttribute("muted","muted");
 video.setAttribute("loop","loop");
 container.appendChild(video);
 video.setAttribute("style","display:block;")
  video.setAttribute("style","height:1000%;width:100%"); 
 
 body.setAttribute("height","100vh");
 body.setAttribute("width","100vw"); 
 video.setAttribute("height","100%");
 video.setAttribute("width","100%");
 body.appendChild(container);
 container.setAttribute("style"," min-width:100% ;min-height:100vh;position:fixed;right:0;bottom:0;");
   
 
 toggle.addEventListener("click",()=>{
    

if(!toggle.classList.contains("paused"))
{

    
    video.pause();
}
else{
    video.play(); 
}

toggle.classList.toggle("paused");
 
 }) 
 
}
 
 
 