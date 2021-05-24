window.onload= function(){
    var seconds=00;
    var tens=00;
var Tens=document.getElementById('tens')
var Seconds=document.getElementById('seconds')
var Start=document.getElementById('button-start')
var Stop=document.getElementById('button-stop')
var Reset=document.getElementById('button-reset')
var interval;
Start.onclick=function(){
    clearInterval(interval);
    interval=setInterval(startTimer, 10)
}
Stop.onclick=function(){
    clearInterval(interval);
}
Reset.onclick=function(){
    clearInterval(interval);
    tens="00";
    seconds="00";
    Tens.innerHTML=tens;
    Seconds.innerHTML=seconds;
}
  function startTimer(){
tens++;
if(tens<=9)
{
    Tens.innerHTML= '0'+tens;
}
if(tens>9)
{
    Tens.innerHTML=tens;
}
if(tens>99){
console.log("seconds");
seconds++;
      Seconds.innerHTML = "0" + seconds;
      tens = 0;
      Tens.innerHTML = "0" + 0;
    }
    if (seconds > 9){
        Seconds.innerHTML = seconds;
      }
}
}