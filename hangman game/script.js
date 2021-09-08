// canvas
var canvas=document.querySelector(".hangman-image-container");
var ctx=canvas.getContext("2d");

ctx.beginPath();
ctx.fillColor='white'; 
ctx.lineWidth=2;
ctx.moveTo(0,40); 
ctx.lineTo(140,40);
ctx.moveTo(160,60);
ctx.arc(140,60,20,0,Math.PI*2,true);
ctx.moveTo(140,80);
ctx.lineTo(140,110);
ctx.lineTo(110,140);
ctx.moveTo(140,110);
ctx.lineTo(170,140);
ctx.moveTo(140,90);
ctx.lineTo(100,90);
ctx.moveTo(140,90);
ctx.lineTo(180,90); 
ctx.stroke();
// canvas

// data
categories = [
    ["everton", "liverpool", "swansea", "chelsea", "hull", "manchestercity", "newcastleunited"],
    ["alien", "dirtyharry", "gladiator", "finding-nemo", "jaws"],
    ["manchester", "milan", "madrid", "amsterdam", "prague"]
];

hints = [
    ["Based in Mersyside", "Based in Mersyside", "First Welsh team to reach the Premier Leauge", "Owned by A russian Billionaire", "Once managed by Phil Brown", "2013 FA Cup runners up", "Gazza's first club"],
    ["Science-Fiction horror film", "1971 American action film", "Historical drama", "Anamated Fish", "Giant great white shark"],
    ["Northern city in the UK", "Home of AC and Inter", "Spanish capital", "Netherlands capital", "Czech Republic capital"]
];
var hangmanImageContainer=document.querySelector(".hangman-image-container");
var letters=document.querySelectorAll(".letter"); 
var playAgainBtn=document.querySelector(".play-again-btn");
var inputLetterContainer=document.querySelector(".input-letter-container");
function initializer(event){
    inputLetterContainer.innerHTML="";
    hangmanImageContainer.classList.remove("hanged");
letters.forEach((letter)=>{
    if(letter.classList.contains("disabled")){
        letter.classList.remove("disabled");
    }
})
    var gameOver=document.querySelector(".game-over");
    gameOver.innerHTML="";
    var hintBtn=document.querySelector(".hint-btn");
    var categorySpan=document.querySelector(".category-span");
    var selectedCategoryIndex=Math.floor(Math.random()*categories.length);
    var selectedCategoryAnswerIndex=Math.floor(Math.random()*categories[selectedCategoryIndex].length);
    var clue=document.querySelector(".clue");
    clue.innerHTML='';
    var livesCountContainer=document.querySelector(".lives-container");
    var livesCountSpan=document.querySelector(".lives");
    livesCountSpan.innerHTML="10";
    
    if(selectedCategoryIndex==0){
        selectedCategory="premier league club name";
    }
    else if(selectedCategoryIndex==1)
    {
        selectedCategory="films"
    }
    else{
        selectedCategory="name of city";
    }  
    categorySpan.innerHTML=selectedCategory; 
    hintBtn.addEventListener("click",()=>{ 
       clue.innerHTML=hints[selectedCategoryIndex][selectedCategoryAnswerIndex];
        
    });
    
   var livesCount=10;
   
const keyboardLetters=document.querySelectorAll(".letter");
var  correctAnswer=categories[selectedCategoryIndex][selectedCategoryAnswerIndex];
for(i=0;i<correctAnswer.length;i++)
{
   var letterSpan=document.createElement("span");
   letterSpan.innerHTML="_";
  inputLetterContainer.appendChild(letterSpan);
}
  var correctAnswerLetters= correctAnswer.split(""); 
keyboardLetters.forEach((keyboardLetter)=>{
keyboardLetter.addEventListener("click",(event)=>{
    if(!event.target.classList.contains("disabled")){
    var checker=0;
     var userInputLetter=event.target.innerHTML;
    event.target.classList.add("disabled");
     correctAnswerLetters.forEach((correctAnswerLetter,index)=>{
       if(correctAnswerLetter==userInputLetter){ 
           checker=1;
            inputLetterContainer.childNodes[index].innerHTML=userInputLetter;
       }
     });
     if(checker==0){
         if(!livesCount<=0){
         livesCount--
         }
     } 
     livesCountSpan.innerHTML=livesCount;

     if(livesCount==0)
    {
gameOver.innerHTML="game over";
hangmanImageContainer.classList.add("hanged");

    }
} 
});
})
};
window.onload=initializer();
 playAgainBtn.addEventListener("click",initializer);