//initiated audio file
var audio = new Audio('/music/OldeTimey.mp3');
var storedAudio = localStorage.getItem("music");

if(storedAudio == "true")
{
  audio.play();
}

//key presses for 1,3, and 4
window.addEventListener("keydown", checkKeyPress, false);
function checkKeyPress(key)
{
  if (key.keyCode == "49")//key press 1
  {
    window.location = 'http://localhost:1337/setup';//links to trail
  }
    else if(key.keyCode == "50")
    {
    window.location = 'https://en.wikipedia.org/wiki/Oregon_Trail';//links to OregonTrails wiki
    }
    else if(key.keyCode == "51")//key press 2
    {
    window.location = 'http://localhost:1337/topten';//links to topten
    }
      else if(key.keyCode == "52")//key press 4
      {
        if(musicOn == "true")//if the music is on and you press 4 it is paused
          {
      audio.pause();
      musicOn = "false";
      localStorage.setItem("music", musicOn);
      alert("The music is now off");
          }
            else if(musicOn == "false")//if it is off you turn it back on
            {
             audio.play();
             musicOn = "true";
             localStorage.setItem("music", musicOn);
             alert("The music is now on");
           }

      }
  }
