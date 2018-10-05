//press Space to change page
window.addEventListener("keydown", checkKeyPress, false);
function checkKeyPress(key)
{
  if (key.keyCode == "32")
  {
    window.location = 'http://localhost:1337/mainmenu';
  }
}

//fades my text
var opacity = 0;
var fadeElement = document.getElementById("faded");
var opacityLimit = 10;
var op = fadeElement.style.opacity;

function fade()
{
  if(opacity < opacityLimit)
  {
    fadeElement.style.opacity = opacity / 10;
    opacity++;
    setTimeout(fade, 100);
  }
  else if (opacity == 100)
    {
      fade();
    }
    else
      {
        opacity = 0;
        fade();
      }
}

fade();
