//makes sure the music doesn't play page to page if it is off
var count = 0
  if(count == 0)
  {
    musicOn = "false";
    count++;
  }

//allows the song to loop if it is selected as on
  audio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
  }, false);
