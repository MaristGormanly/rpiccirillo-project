//press space to go home
window.addEventListener("keydown", checkKeyPress, false);
function checkKeyPress(key){
  if (key.keyCode == "32"){
    window.location = 'http://localhost:1337/mainmenu';
  }
}
//sets the audio in trail
var audio = new Audio("/music/OldeTimey.mp3");
var storedAudio = localStorage.getItem("music");

if(storedAudio == "true")
{
  audio.play()
}

audio.addEventListener('ended', function() {
  this.currentTime = 0;
  this.play();
}, false);
