//press space to go home
window.addEventListener("keydown", checkKeyPress, false);
function checkKeyPress(key){
  if (key.keyCode == "32"){ //press space to go home
    window.location = 'http://localhost:1337/mainmenu';
  }
}

//-------------------------------------------------------------------------
//allows you to change the pace
function changePace() {
  fetch('/trail/updatePace').then(function(response) {
    if (response.status !== 200) {
      console.log('problem with ajax call! ' + response.status + " msg: " + response.value);
      return;
    }
    response.text().then(function(data) {
    document.getElementById('pace').innerHTML = data.paceName;
    console.log(data);
    })
  });
}

//brings upon a new day with settings being changed as well
function nextDay() {
	fetch('/api/updateGame').then(function(response) {
	if (response.status !== 200) {
			console.log(response.status + "msg: " + response.value);
			return;
		}
		response.json().then(function(data) {
		 	populateSettings(data);
		 	return (data);
		 	});
	 });
}

//populates my settings
function populateSettings(gameData, gameSettings)
{
document.getElementById('days').innerHTML = gameData.daysOnTrail
document.getElementById('miles').innerHTML = gameData.milesTraveled;
document.getElementById('health').innerHTML = gameData.groupHealth;
document.getElementById('groupStatus').innerHTML = gameData.groupStatus;
document.getElementById('weather').innerHTML = gameData.currentWeather.weatherType;
document.getElementById('pace').innerHTML = gameData.currentPace.paceName;
document.getElementById('terrain').innerHTML = gameData.currentTerrain.name;
document.getElementById('currentPlayers').innerHTML = gameData.currentPlayers;
}

//starts you right on day 1 for trail
nextDay();


document.body.onkeydown = function(event)
{
  if(event.keyCode == 80)//press p to change pace
  {
    changePace();
  } else if(event.keyCode == 13)//press Enter to go to the next day
  {
    nextDay();
  }
}

//----------------------------------------------------------------------------

//sets up the audio in trail
var audio = new Audio('/music/OldeTimey.mp3');
var storedAudio = localStorage.getItem("music");

if(storedAudio == "true")
{
  audio.play();
}

audio.addEventListener('ended', function() {
  this.currentTime = 0;
  this.play();
}, false);
