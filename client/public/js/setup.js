//press the spacebar to go the mainmenu
window.addEventListener("keydown", checkKeyPress, false);
function checkKeyPress(key)
{
  if (key.keyCode == "32")
  {
    window.location = 'http://localhost:1337/mainmenu';
  } else if (key.code == "13") {
    window.location = 'http://localhost:1137/trail';
  }
}
//----------------------------------------------------------------------------
//whenever you change screens your currentScreen value increaases
var currentScreen = 0;

//get screen
function getScreen(screenId)
 {
	fetch('/api/setup/screen/' + screenId).then(function(response)
   {
		if (response.status !== 200)
    {
		console.log(response.status + " msg: " + response.value);
	  return;
	  }
	   response.text().then(function(data)
    {
		 gameContainer.innerHTML = data;
	  })
	 });
  }

getScreen(0);


function getPlayerNames()
{

	fetch('/api/gameController/getPlayerNames').then(function(response)
  {
	if (response.status !== 200)
    {
		  console.log(response.status + " msg: " + response.value);
	    return;
	  }
	response.json().then(function(data)
    {
		var playerNames = data;
    var player1Name =document.getElementById("player1Name");
        var player2Name =document.getElementById("player2Name");
            var player3Name =document.getElementById("player3Name");
                var player4Name =document.getElementById("player4Name");
                    var player5Name =document.getElementById("player5Name");

		player1Name.innerHTML = playerNames[0];
		  player2Name.innerHTML = playerNames[1];
		    player3Name.innerHTML = playerNames[2];
		      player4Name.innerHTML = playerNames[3];
		        player5Name.innerHTML = playerNames[4];
    console.log(playerNames);
    })
	});
}

function showSettings()
{
	fetch('/setup/getSettings').then(function(response)
  {
		if (response.status !== 200)
    {
			console.log(response.status + " msg: " + response.value);
	    return;
	  }
	response.json().then(function(data)
    {
		 populateSettings(data);
		 return data;
		})
	});
}

function populateSettings(gameSettings)
{
	document.getElementById('professionName').innerHTML = gameSettings.playerProfession;
	document.getElementById('money').innerHTML = gameSettings.playerMoney;
	document.getElementById('month').innerHTML = gameSettings.startMonth;
	}


//choose your profession then changes the screen
gameContainer.addEventListener("click", function(e)
{
// get the element clicked
	var targetElement = event.target || event.srcElement;
		if(targetElement.id == "bankerMenuItem")
    {
			saveProfession("Banker");
      saveMoney(3000);
      getScreen(1);
	  }

		if(targetElement.id == "carpenterMenuItem")
    {
			saveProfession("Carpenter");
      saveMoney(2000);
        getScreen(1);
   	}

		if(targetElement.id == "farmerMenuItem")
    {
			saveProfession("Farmer");
      saveMoney(1500);
        getScreen(1);
	  }

		if(targetElement.id == "differencesMenuItem")
     {
			console.log("learn more!");
        getScreen(1);
	   }
  });

//save profession and changes screen
function saveProfession(profession)
{
	fetch('/api/setup/saveProfession',
	{
		method:'post',
		headers:
    {
		"Content-type": "application/json; charset=UTF-8"
	  },
		body: '{"profession": "' + profession + '"}'
	}).then(function(response)
   {
		if (response.status !== 200)
    {
			console.log('problem with ajax call! ' + response.status + " msg: " + response.value);
		return;
	  }

		else
    {
			getScreen(1);
			currentScreen = 1;
	  }
			console.log("profession " + profession + " saved!");
	  });
 }

//saves money amount depending on what profession you choose
 function saveMoney(money)
 {
 	fetch('/api/setup/saveMoney',
 	{
 		method:'post',
 		headers:
     {
 		"Content-type": "application/json; charset=UTF-8"
 	  },
 		body: '{"money": "' + money + '"}'
 	}).then(function(response)
    {
 		if (response.status !== 200)
     {
 			console.log('problem with ajax call! ' + response.status + " msg: " + response.value);
 		return;
 	  }
 			console.log("money " + money + " saved!");
 	  });
  }

  //lets you save leader name and moves you to the next page
  document.querySelector('body').addEventListener('click', function(event)
  {
  	if (event.target.id === 'page1sub')
    {
  		saveLeader(document.getElementById("leader").value);
  	}
  });


  //saves leader
  function saveLeader(playerName)
  {
  	fetch('/api/setup/leaderName',
  		{
  			method: 'post',
  			headers:
         {
  			"Content-type": "application/json; charset=UTF-8"
  	 	   },
  			body: '{"leaderName": "' + playerName + '"}'
  		}).then(function(response)
       {
  				if (response.status !== 200)
           {
  					console.log('problem with ajax call! ' + response.status + "msg: " + response.value);
  					return;
  				 }
  					else
            {
  						getScreen(2);
  						currentScreen = 2;
  					}
  						console.log("leaderName " + playerName + " saved!");
  			});
  	}



//clicking the button makes it so that you save each player to its own id
document.querySelector('body').addEventListener('click', function(event)
{
    if (event.target.id === 'page2sub')
    {
      	savePlayers(document.getElementById("player1").value,1);
      	savePlayers(document.getElementById("player2").value,2);
        savePlayers(document.getElementById("player3").value,3);
        savePlayers(document.getElementById("player4").value,4);
  	}
});

//post players
function savePlayers(playerName, playerID) {
	fetch('/api/setupController/playerSaved',
	{
		method:'post',
		headers: {
		"Content-type": "application/json; charset=UTF-8"
	},
  body:'{"playerID": "' + playerID + '", "playerName": "' + playerName +'"}'


	}).then(function(response) {
		if (response.status !== 200) {
			console.log('problem with ajax call! ' + response.status + " msg: " + response.value);
		return;
	}

		else {
			getScreen(3);
			currentScreen = 3;
	}
			console.log("playerName " + playerName + " saved!");
	});
	}


  //choosing the month
  gameContainer.addEventListener("click", function(pickMonth)
   {

  	var targetElement = pickMonth.target || pickMonth.srcElement;

      if(targetElement.id == "marchItem")
        {
          saveMonth("March");
        }
  		if(targetElement.id == "aprilItem")
      {
  			saveMonth("April");
  	  }

  		if(targetElement.id == "mayItem")
      {
  			saveMonth("May");
    	}

  		if(targetElement.id == "juneItem")
      {
  			saveMonth("June");
  	  }

  		if(targetElement.id == "julyItem")
      {
  			saveMonth("July");
      }
  	});

//month gets saved
function saveMonth(month)
{
	fetch('/api/setup/month',
	{
		method: 'post',
		headers:
    {
		"Content-type": "application/json; charset=UTF-8"
		},
			body: '{"month": "' + month + '"}'
		}).then(function(response)
    {
			if (response.status !== 200) +
      {
		//	console.log('problem with ajax call!' + response.status + " msg: " + response.value);
		  }

			else
      {
				getScreen(4);
				currentScreen = 4;
				getPlayerNames();
				showSettings();

			}
				console.log("month " + month + " saved!");
		});
}


//for the setup screen
document.body.onkeypress = function(e)
{
  if(e.keyCode == 13)
  {
  	if(currentScreen == 1)
    {
  		saveLeader(document.getElementById("player0").value);
  	}

  	if(currentScreen == 2)
    {
  		savePlayers(document.getElementById("player1").value, 1);
      savePlayers(document.getElementById("player2").value, 2);
      savePlayers(document.getElementById("player3").value, 3);
      savePlayers(document.getElementById("player4").value, 4);
  		}
  }
  		if(currentScreen == 4)
       {
  		     if(e.keyCode == 13)
           {
  			     window.location = '/trail';
  		     }
  	   }
}
//-----------------------------------------------------------------------------

//sets up the audio in setup
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
