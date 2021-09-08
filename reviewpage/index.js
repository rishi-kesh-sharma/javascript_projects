angularbtn=document.getElementById("angularbtn"); 
 var container=document.getElementsById("container");
 var containerarr=[];

 for(i=1;i<=4;i++)
 {
  containerarr[i]=document.getElementsByClassName("i")[0];
 }
 var centercontainers=document.getElementById("centercontainer");
function myfunction(e)
{
    if( e.itemid=="great")
    {
    for(count=1;count<=4;count++)
      {
        if(parseInt(e.class)+1==count)
        {
            containerarr[count].visibility="visible";
            continue;
        }
        containerarr[count].style.visibility="hidden";
     }
    }

  if(e.itemid=="less")
  {
    for(count=4)
  }
}    

