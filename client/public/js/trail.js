//press space to go home
/*window.addEventListener("keydown", checkKeyPress, false);
function checkKeyPress(key){
  if (key.keyCode == "32"){
    window.location = 'http://localhost:1337/mainmenu';
  }
}*/

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


function changePace() {
  fetch('/trail/updatePace').then(function(response) {
    if (response.status !== 200) {
      console.log('problem with ajax call! ' + response.status + " msg: " + response.value);
      return;
    }
    response.text().then(function(data) {
      pace.innerHTML = data;
    })
  });
}

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

function populateSettings(gameData, gameSettings)
{
document.getElementById('days').innerHTML = gameData.daysOnTrail
document.getElementById('miles').innerHTML = gameData.milesTraveled;
document.getElementById('health').innerHTML = gameData.groupHealth;
document.getElementById('groupStatus').innerHTML = gameData.groupStatus;
document.getElementById('startMonth').innerHTML = gameData.startMonth;
document.getElementById('weather').innerHTML = gameData.currentWeather.weatherType;
document.getElementById('pace').innerHTML = gameData.currentPace.paceName;
document.getElementById('terrain').innerHTML = gameData.currentTerrain.name;
//document.getElementById('picture').innerHTML = gameData.currentTerrain.imageURL;
//document.getElementById('wagon').innerHTML = gameData.currentTerrain.url;
document.getElementById('currentPlayers').innerHTML = gameData.currentPlayers;

updateWagonPosition(gameData.milesTraveled);


}


nextDay();



function updateWagonPosition(milesTraveled)
 {
	var percentTraveled = (milesTraveled / 5) - 10;
	wagon.style.right = percentTraveled + "%";
}


document.body.onkeydown = function(event)
{
  if(event.keyCode == 80)
  {
    changePace();
  } else if(event.keyCode == 13)
  {
    nextDay();
  }
}
