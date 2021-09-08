  let btns=document.querySelectorAll(".icon");
  let ans=document.querySelectorAll(".ans"); 
  console.log(ans);
  btns.forEach((btn,index) => {
      btn.addEventListener("click",()=>
      {
           
          ans[index].classList.toggle("opened");
          console.log(ans[index].classList.contains("opened"));
          if( ans[index].classList.contains("opened"))
          {
              btn.innerHTML="-";
          }
          else{
              btn.innerHTML="+";
          }
      })
  });

   




/*
 console.log(demo);
console.log(qn);
let icon=document.querySelectorAll("#icon");
let ans=document.querySelectorAll("#ans");
console.log(icon.id);
console.log(ans.id);
icon.forEach((value,index)=> {
    console.log("hello");
value.addEventListener("click",()=>{

    console.log(index);
})
});*/