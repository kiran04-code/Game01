function bibblegenrator(){
    var clutter = "";
for(var i=1;i<=135;i++){
    const kk  = Math.ceil( Math.random()*10);
    clutter +=`<div id="bubble">${kk}</div>` 
}
 document.querySelector("#panelbottom").innerHTML = clutter
}
function timer(){
    var timer = 60;
    const timeint = setInterval(function(){
        if(timer>0){
            timer--;
            const mama = document.querySelector("#Timer")
            mama.innerHTML = timer 
        }
        else{
                clearInterval(timeint)
                document.querySelector("#panelbottom").innerHTML =`<h1> Game over </h1><h3>Start Again</h3><button onclick="bibblegenrator()">Start Again</button>`
        }
       
    },1000);
}
var hitm;
function hitran(){
    hitm = Math.ceil( Math.random()*10)
  document.querySelector("#hit").innerHTML = hitm
}
var score = 0;
function scoreinc(){
   score +=10
   document.querySelector("#scoreval").innerHTML = score

}

document.querySelector("#panelbottom").addEventListener('click',function(details){
    const value = Number(details.target.textContent)
    console.log(value)
    if(value === hitm){
        scoreinc()
        bibblegenrator()
        hitran()
    }
    else{
        alert('well try! Number not Match ')
    }
   })
hitran()
timer();
bibblegenrator()

