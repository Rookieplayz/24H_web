


function changeBackground(time)
{
    console.log(time);
    var  doc=document.getElementById("background");
   var hover=document.getElementById("dropHover");

    if(time>=0&&time <=5)
    {
        console.log('Midnight');
        //Midnight
       // hover.style.backgroundColor="rgba(26, 0, 48, 0.918)";
        doc.style.background="linear-gradient(rgba(26, 0, 48, 0.918),rgba(0, 0, 88, 0.301))";

    }
    else if(time>=6&&time<=11)
    {
        console.log('DAWN');
        //dawn
        hover.style.backgroundColor="rgba(72, 200, 240, 0.918)";
        doc.style.background="linear-gradient(rgba(72, 200, 240, 0.918),rgba(145, 238, 255, 0.39))";
    }
    else if(time>=12&&time<17)
    {
        hover.style.backgroundColor="rgba(247, 113, 4, 0.918)";
        console.log('NOON');
        //Afternoon
        
        doc.style.background=" linear-gradient(rgba(247, 113, 4, 0.918),rgba(255, 196, 0, 0.39))";
    }
    else if(time>=18&&time<20)
    {
        console.log('EVE');
        hover.style.backgroundColor="rgba(240, 29, 75, 0.918)";
        //Evening
        doc.style.background="linear-gradient(rgba(240, 29, 75, 0.918),rgba(166, 38, 240, 0.39))";
 
    }
    else if(time>=21&&time<24)
    {
        console.log('NIGHT');
        //Night
        hover.style.backgroundColor="rgba(30, 1, 97, 0.918)";
        doc.style.background="linear-gradient(rgba(30, 1, 97, 0.918),rgba(166, 38, 240, 0.39));";
        
    }
}
function getLocation()
{}
function updateClock()
{
    var  doc=document.getElementById("time");
    var  dt=document.getElementById("date");
    var  loc=document.getElementById("loc");
    
    var now =new Date();
    console.log(now.getHours());
    changeBackground(now.getHours());
    if(now.getMinutes()>=10)
    doc.innerHTML=now.getHours()+':'+now.getMinutes();
    else if(now.getHours()<10)
   {
        doc.innerHTML='0'+now.getHours()+':'+now.getMinutes();
        if(now.getMinutes()<10)
        doc.innerHTML='0'+now.getHours()+':0'+now.getMinutes();

   }
        else   doc.innerHTML=now.getHours()+':0'+now.getMinutes();
    dt.innerHTML=now.toLocaleDateString();



    
   

}
setInterval(updateClock,1000);
