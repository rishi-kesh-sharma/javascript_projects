const canvas=document.querySelector("canvas");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var c=canvas.getContext("2d");
// c.fillRect(100,100,100,100);
// c.fillStyle="blue";
// c.fillRect(200,100,100,100);
// c.beginPath();
// c.moveTo(100,100);
// c.lineTo(30,30);
// c.beginPath();
// c.lineTo(50,20);
// c.strokeStyle="red";
// c.stroke();
// //circleroke();
// c.moveTo(0,0)
// for(var i=0;i<1000;i++){

//  var rValue=Math.random()*255;
//  var gValue=Math.random()*255;
//  var bValue=Math.random()*255;
//  c.strokeStyle=`rgb(${rValue},${gValue},${bValue})`;
//     var x=Math.random()*window.innerWidth;
//     var y=Math.random()*window.innerHeight;
//     c.beginPath();
    
//     c.arc(x,y,50,Math.PI*0,Math.PI*2,false);
//     c.stroke();

// }
var mouse={
    x:undefined,
    y:undefined
    
}
var maxRadius=40;
var colorArray=[
    "white",
    "red",
    "blue",
    "pink",
    'yellow',
    "lightblue",
    
]
window.addEventListener("mousemove",function(event){
  mouse.x=event.x;
  mouse.y=event.y;
})
function Circle(x,y,dx,dy,radius,color)
{ 
    this.dx=dx;
    this.dy=dy;
    this.radius=radius;
    this.x=x;
    this.y=y;
    this.color=color; 
    this.draw=function(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        c.strokeStyle="red";
        c.fillStyle=this.color;
        c.stroke();
        c.fill(); 
      this.update=function(){

        this.x+=this.dx;
        this.y+=this.dy;
        if(this.x+this.radius>window.innerWidth||this.x<30){
            this.dx=-this.dx;
        }
        if(this.y<this.radius||this.y+this.radius>window.innerHeight){
            this.dy=-this.dy;
        }
        //inter activity
        if(mouse.x-this.x<50 && mouse.x-this.radius>-50 && mouse.y-this.y<50 && mouse.y-this.radius>-50){
            if(this.radius<maxRadius){
                this.radius+=1;
            }
            
            console.log("hello");
        }
         
        else if(this.radius>2){
            this.radius-=1;
        }
        }
      }  
    }
    var circleArray=[];
    for(var i=0;i<100;i++){
var x=Math.random()*(window.innerWidth-radius)+radius;
var y=Math.random()*(window.innerHeight-radius)+radius;
var dx=Math.random()-0.5*5;
var radius=30;
var dy=Math.random()-0.5*5    ;
var color=`rgb{${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)}}`
circleArray.push(new Circle(x,y,dx,dy,radius,color)); 
} 

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,window.innerWidth,innerHeight); 
    for(var i=0;i<circleArray.length;i++) {

        circleArray[i].draw();
        circleArray[i].update(); 
    }
}
animate();