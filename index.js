alert("I Hope\nYou Read my instruction which is given in HTML Section");
alert("Warninng\n\n\nNote : \nAfter Open any app, make sure your app function is close, otherwise its running background");
alert("I will fix it later\nPlease be patience it take time 10 second to load all thing then function work\n\nHappy Coding :)");

window.onload = function (){
musicapp();
var calbody = document.getElementById("calbody")
var calapp = document.getElementById("calapp");
var calappb = document.getElementById("calappb");
var saver = document.getElementById("screen");
var app = document.getElementById("screensaver");
var voiceapp = document.getElementById("vappb");
var voicescreen =  document.getElementById("bodyvoice");
var voiceapp = document.getElementById("vappb");
 var voiceapp = document.getElementById("vappb");
 var display1 = document.getElementById("display");
  var funsetting = document.getElementById("funsetting");
   var settingbody =       document.getElementById("settingbody")
   var musicbody = document.getElementById("musicbody");
   var musicbodyapp = document.getElementById("musicbodyapp");
   var subwaybody = document.getElementById("subwaybody");
    var subwayapp = document.getElementById("subwayapp");
    display1.style.backgroundColor = "white";   
   // display1.style.color = "black";   
     
    // phone Color    
    var ranges = document.getElementById("ranges");
    var changephonecolor =  document.getElementById("changephonecolor");
    
    var colorbody = document.getElementById("colorbody");
        
   // Stopwatch
   var stopwatchbody = document.getElementById("stopwatchbody");
      var stopwatchbodyapp = document.getElementById("stopwatchbodyapp");
      notelap();
      
      
      
      
      //screensaver hide & show balls

stopwatchbodyapp.addEventListener("click",function(){

 saver.style.display = "none";
 app.style.display = "none";    
 voiceapp.style.display = "none";  
 calappb.style.display = "none";
 
musicbody.style.display = "none";
 musicbodyapp.style.display  = "none";
 settingbody.style.display = "none";
 subwayapp.style.display = "none";
 subwaybody.style.display = "none";
 display1.style.backgroundColor = "black";
 stopwatchbody.style.display = "block";
 stopwatchbodyapp.style.display = "none";
 
    
});
      
   
   
   
   // Phone color 
    changephonecolor.addEventListener("click", function(){
    colorbody.style.display  = "block";
    ranges.style.display  = "grid";
    funsetting.style.display  = "none";
    })
    
    
   
   // musicplayer
   
 musicbodyapp.addEventListener("click", function(){
     musicbody.style.display = "block";
     musicbodyapp.style.display = "none";
     funsetting.style.display  = "none";
     calapp.style.display = "block";
  var voicescreen =  document.getElementById("bodyvoice");
    voicescreen.style.display = "none";
voiceapp.style.display = "none";
screensaver.style.display = "none";
calbody.style.display = "none";
settingbody.style.display = "none";
calappb.style.display  = "none";
subwayapp.style.display = "none";
 subwaybody.style.display = "none";
 display1.style.backgroundColor = "white";
 stopwatchbody.style.display = "none";
 stopwatchbodyapp.style.display = "none";
 
 var red = document.getElementById('red').value;
        var blue = document.getElementById('blue').value;
        var green = document.getElementById('green').value;    
        var rgb = document.getElementById('Phone').style.backgroundColor = "RGB("+ red + "," + blue + "," + green + ")";
        
    
 })
   
  // subway game

subwayapp.addEventListener("click",function(){

 saver.style.display = "none";
 app.style.display = "none";    
 voiceapp.style.display = "none";  
 calappb.style.display = "none";
musicbody.style.display = "none";
 musicbodyapp.style.display  = "none";
 settingbody.style.display = "none";
 subwayapp.style.display = "none";
 subwaybody.style.display = "block";
 display1.style.backgroundColor = "white";
 stopwatchbody.style.display = "none";
 stopwatchbodyapp.style.display = "none";
 
 
});
 

   
   
 //setting show & hide
 settingbody.addEventListener("click", function(){
     funsetting.style.display  = "block";
     calapp.style.display = "block";
  var voicescreen =  document.getElementById("bodyvoice");
    voicescreen.style.display = "none";
voiceapp.style.display = "none";
screensaver.style.display = "none";
calbody.style.display = "none";
settingbody.style.display = "none";
calappb.style.display  = "none";
musicbody.style.display = "none";
 musicbodyapp.style.display  = "none"
 subwayapp.style.display = "none";
 subwaybody.style.display = "none";
 display1.style.backgroundColor = "black";
 display1.style.color = "white";
 stopwatchbody.style.display = "none";
 stopwatchbodyapp.style.display = "none";
 
 })
 
//screensaver hide & show balls

app.addEventListener("click",function(){

 saver.style.display = "block";
 app.style.display = "none";    
 voiceapp.style.display = "none";  
 calappb.style.display = "none";
 
musicbody.style.display = "none";
 musicbodyapp.style.display  = "none";
 settingbody.style.display = "none";
 subwayapp.style.display = "none";
 subwaybody.style.display = "none";
 display1.style.backgroundColor = "black";
 stopwatchbody.style.display = "none";
 stopwatchbodyapp.style.display = "none";
    
});
 
 
//homeButton
var button = document.getElementById("button").addEventListener("click",function(){
navigator.vibrate(100);
 saver.style.display = "none";
 app.style.display = "block";
 display1.style.backgroundColor =  "white";

 voicescreen.style.display = "none";
voiceapp.style.display = "block";
display1.style.background  = "none";
 calappb.style.display = "block";
// calapp.style.display = "block";
 calbody.style.display = "none";
 funsetting.style.display = "none";
 settingbody.style.display = "block";
 musicbody.style.display = "none";
 musicbodyapp.style.display  = "block"
 
 subwayapp.style.display = "block";
 subwaybody.style.display = "none";
 display1.style.backgroundColor = "white";
 ranges.style.display  = "none";
 stopwatchbody.style.display = "none";
 stopwatchbodyapp.style.display = "block";
 display1.style.color = "black";
 
 });



//PowerButton 
let funcArr = [
    function() {
       app.style.display = "none";
       saver.style.display = "none";
 display1.style.backgroundColor =  "black";
 
 voiceapp.style.display = "none";  
 calappb.style.display = "none";
 voiceapp.style.display = "none";  
 settingbody.style.display  = "none"
 navigator.vibrate(100);
 
musicbody.style.display = "none";
 musicbodyapp.style.display  = "none"
 subwayapp.style.display = "none";
 subwaybody.style.display = "none";
 stopwatchbody.style.display = "none";
 stopwatchbodyapp.style.display = "none";
    
    },  
    function() {
 display1.style.background =  "url('https://dl.dropbox.com/s/s5vtg4cyntofue4/images%20%281%29.jpeg')";
 app.style.display = "none";
       saver.style.display = "none";
 
 voiceapp.style.display = "none";  
 calappb.style.display = "none";
 voiceapp.style.display = "none";  
 navigator.vibrate(100);
 settingbody.style.display  = "none";
 
 musicbody.style.display = "none";
 musicbodyapp.style.display  = "none"
    subwayapp.style.display = "none";
 subwaybody.style.display = "none";
 display1.style.backgroundColor = "white";
 stopwatchbody.style.display = "none";
 stopwatchbodyapp.style.display = "none";
    }
    
];

let i = 0;

var power = document.getElementById("power").addEventListener("click",function(){
funcArr[i++ % funcArr.length]();
 
 //app.style.display = "block";
 });

// screensaver 

 
var color =document.getElementById("color");
color.animate([ 
{  backgroundColor:"black" }, 
{  backgroundColor: "rgba(0,0,0,1)" }], { 

//easing: 'steps(2, end)',
 iterations: Infinity, 
direction: 'alternate',

  duration: 2000
});
    
    start();

}

 //var timeout = null;

function start () {
    for(var i = 0; i<53; i++) {
    
var r = Math.floor(Math.random() *256)
            .toString(16).padStart(2,"0");
            
var g = Math.floor(Math.random() *256)
            .toString(16).padStart(2,"0");
            
var b = Math.floor(Math.random() *256)
            .toString(16).padStart(2,"0");        
        
var left  = Math.floor( Math.random() * 100);

var top   = Math.floor( Math.random() * 100);
      
      var box = document.getElementById('box' + i);
box.style.cssText = "bottom:" + top + "%;" + "left:" + left + "%;box-shadow:0.5px 0.5px 1px yellow,-0.5px -0.5px 1px white;border-radius:100%; border:; width: 8px;  height:8px; position:absolute; transition:2s; background-color:#" + r + g + b;

    }

  // timeout = 
  setTimeout(start,1000);
  
  
  
  // Text to Speech
//alert ("After Click Voice Button\nWait 2 second fo response, due to some time it delay");
var display1 = document.getElementById("display");
var voiceapp = document.getElementById("vappb");
voiceapp.addEventListener("click", function(){ 
var voicescreen =  document.getElementById("bodyvoice");
voicescreen.style.display = "none";
voiceapp.style.display = "block";
screensaver.style.display = "none";
calappb.style.display = "none";
settingbody.style.display  = "none"

musicbodyapp.style.display  = "none"
subwayapp.style.display = "none";
 subwaybody.style.display = "none";
 display1.style.backgroundColor = "white";
 stopwatchbody.style.display = "none";
 stopwatchbodyapp.style.display = "none";
    
});



// Calculator Hide & Shows


calapp.addEventListener("click",function(){
    calapp.style.display = "block";
  var voicescreen =  document.getElementById("bodyvoice");
    voicescreen.style.display = "none";
voiceapp.style.display = "none";
screensaver.style.display = "none";
calbody.style.display = "block";
settingbody.style.display  = "none"
musicbody.style.display = "none";
 musicbodyapp.style.display  = "none";
    subwayapp.style.display = "none";
 subwaybody.style.display = "none";
 stopwatchbody.style.display = "none";
 stopwatchbodyapp.style.display = "none";
    
})

}// window

//alert ("After Click Voice Button\nWait 2 second fo response, due to some time it delay");

console.log =() =>{};
console.error =() =>{};

function speak(){
var text = document.getElementById("text").value;

var t = "Please write anything...";

if ( text  == "" ){
  responsiveVoice.speak(t);
  
 document.getElementById("text").placeholder = t;
  
}
else {
responsiveVoice.speak(text); }}



/* ----- Calculator ----- */


function insert(num) {

    var a = document.form.textview;

    a.value += num;
}
function opt(amd) {
    var view = document.form.textview;
    if (view.value != "") {
        view.value += amd;
    }
}
function zero() {
    var view = document.form.textview;
    if (view.value != "") {
        view.value += '0';
    }
}
function equal() {
    var button = document.getElementsByClassName('none');
    var a = document.form.textview;
    var exp = a.value;

    if (exp) {
        try {a.value = eval(exp);}
        catch (e) {
            alert ("Syntax Error!");
            document.form.textview.value = 'Syntax Error!';
            none();
        }
    }
    if (a.value == 0) {
        a.value = "";
    }
    if(a.value == 'Infinity'){
        document.form.textview.value = "Can't divide by Zero!";
       // button.onclick ='none()';
       alert('Can\'t divide by Zero!')
       none();
    }
}
function none() {
    alert('Press the Clear button!');
} 
function clean() {
    document.form.textview.value = '';
}

function back() {
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length-1);
}

// Music Player
function musicapp(){ 
document.getElementById('body').style.display= "block"; 
document.getElementById('load').style.display= "none";
 
}


// Phone Color             
function green () {
            
          var red = document.getElementById('red').value;
        var blue = document.getElementById('blue').value;
        var green = document.getElementById('green').value;  
        var rgb = document.getElementById('Phone').style.backgroundColor = "RGB("+ red + "," + green + "," + blue + ")";                                                                           
}



// stopwatch 
"use strict"

var time = 0; var i = 0;
var isrunning = false; 
var lap = "00:00:00:00";
var isready;


//to start or stop
function begin()
{   
var aud =document.getElementById("click");

    //if clock is stop i.e when start 
    if(!isrunning)
    {         
       isrunning = true;  
       increment(); 
    aud.play(); isready =aud.play();
        document.getElementById("start").innerHTML = "PAUSE";     document.getElementById("begin").style.backgroundImage="-webkit-linear-gradient(left,#cb2d3e,#ef473a)";             } 
   //when pause i.e while running     
    else{       isrunning = false; 

if(isready !== undefined )    
{
    aud.pause();
} document.getElementById("start").innerHTML = "RESUME";         document.getElementById("begin").style.backgroundImage = "-webkit-linear-gradient(right,#06beb6,#48b1bf)";             
    } 
    
}

//To increase time by 1 every 10 milliseconds
function increment()
{     
    if(isrunning)
    {         
    setTimeout(
    
    function()
 {             
    time++;     var t = time/10;
    
    //to set time
    var milli = time % 10;
    var secs = Math.floor(t % 60);
    var mins = Math.floor(t/60);             
    var hours = Math.floor(t/3600);             
            
    //minor changes
    if(mins < 10)
     {   mins = "0" + mins;   } 
    if(milli < 10)
     {   milli = milli + "0" ; } 
    if(hours < 10)
     {   hours = "0" + hours; } 
    if(secs < 10)
     {   secs = "0" + secs;   } 

//output  
lap =  hours + ":" + mins + ":" + secs + ":" + milli;
          
document.getElementById("output").innerHTML = lap  ; 
        
         increment();},100) 
     
         }      
     } 

//to set things to 00:00:00:00    
function reset()
{     
isrunning = false;     time = -1; 
//console.log("----session ended-----");
i=0;

var aud =document.getElementById("click");

if(isready !== undefined )    
{
    aud.pause();
}
    document.getElementById("start").innerHTML = "Start";     document.getElementById("output").innerHTML = "00:00:00:00";     document.getElementById("begin").style.backgroundImage = "-webkit-linear-gradient(right,#06beb6,#48b1bf)";         

} 

function notelap()
{   i++;
    console.log("Lap " + i + " on : " + lap); 
}


