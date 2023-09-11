x = 0;
y = 0;

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
    to_number = Number(content);
    if(Number.isInteger(to_number)){
    document.getElementById("status").innerHTML = "Started drawing apple";
  draw_apple = "set"}
}

function setup() {
 
  canvas = createCanvas(900, 600)
  screen_width = window.innerWidth
  screen_height = window.innerHeight
}

function draw() {
  if(draw_apple == "set")
  {
      i = 1
      if(i <= to_number){
        i = i+1

      x = Math.floor(Math.random() * 700)
      y = Math.floor(Math.random() * 500)

      image(apple.png)
      document.getElementById("status").innerHTML = to_number + " 🍎 Apple drawn";
      draw_apple = "";
      console.log("apple drawn")
    }
   }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
