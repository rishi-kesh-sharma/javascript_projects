var displayValue=document.querySelector("input");
displayValue.value="";  
const takeInput=(e)=>{
    var result;
 let btnValue= e.target.innerHTML; 
    if(!isNaN(btnValue)){
      btnValue=  Number(btnValue);
    } 
    if(!(btnValue=="C"||btnValue=="="))
    {
     displayValue.value+=btnValue;    
    }
    if(btnValue=="=")
    {
        var calculateValue=displayValue.value;
        typeof(calculateValue);
      var replacedString= calculateValue.replace("\u00f7","/");
      replacedString= replacedString.replace("\u00d7","*"); 
       
      result=eval(replacedString); 
      if(!Number.isInteger(result)){
      displayValue.value=result.toFixed(2);
      }
      else{
        displayValue.value=result ;
      }
    }
    if(btnValue=="C"){
        displayValue.value="";
    }
}
var btns=document.querySelectorAll('.grid-item:not(.display)');
 
btns.forEach((btn)=>{
    btn.addEventListener("click", takeInput);

}) ;
 