var terrain = require("./terrain");
var weather = require("./weather");
var pace = require("./pace");
var setupController = require('../controllers/setupController');

//player objects and characteristics
function player(playerNames, playerStatus, playerProfession, playerMoney)
{
  this.playerNames = playerNames;
  this.playerStatus = playerStatus;
  this.playerProfession = playerProfession; //affects starting money
  this.playerMoney = playerMoney;
}


//party Players
function newPlayer(playerNames)
{
  this.playerNames = playerNames;
}

//returns the new group members name
exports.getNewPlayerName = function(playerName)
 {
  return new NewPlayer(playerNames);
}

//to get all Players
exports.getAllPlayers = function()
{
  return currentPlayers;
}


//playerProfession and money
function playerProfession(profession, playerMoney)
{
  this.profession = profession;
  this.playerMoney = playerMoney;
}

exports.getPlayerProfession = function(profession, playerMoney)
 {
return new playerProfession(profession, playerMoney);
}

exports.getProfession = function(req, res)
{
 res.setHeader('Content-Type', 'application/json');
 res.send(exports.playerProfession);
}

//declares the status alive
function newStatus(alive)
{
  this.alive = alive;
}

//exports Players if they are still alive
exports.getPlayerStatus = function(alive)
{
 return new newStatus(alive);
}

//displays all status'
exports.getAllStatus = function()
{
 return PlayerStatus;
}


//created a gameData object
function gameData()
{
  this.startMonth = "March";
  this.milesTraveled = 0;
  this.groupHealth = 100;
  this.currentPace = pace.getPace()[0];
  this.daysOnTrail = 0;
  this.currentWeather = weather.getRandomWeather();
  this.currentTerrain = terrain.getRandomTerrain();
  this.messages = new Array();
  this.dayCount = 0;
//might not need, not entirely sure
  this.currentPlayers = [];
  this.PlayerStatus = [];
  this.playerProfession = "banker";
  this.groupStatus = "";
  this.playerDeath = "";
  this.deathIndex = 4;
}

//checks groupHealth
exports.healthCheck = function(groupHealth, deathIndex, alive)
{
  var deathCheck = 4;

  if(groupHealth >= 80)
  {
    status = "Good";
    //return = "Good";
  }else if(groupHealth >= 50 && groupHealth< 80)
   {
     status = "Fair";
     //return = "Fair";
   }else if(groupHealth >= 20 && groupHealth < 50)
   {
     status = "Poor";
     //return "Poor";
     death(3);
 	   for (i = 0; i < setupController.playerrStatus.length; i++)
       {
 		     setupController.playerStatus[4].alive = false;
 		     deathIndex--;
       }
   }else if (groupHealth >0 && groupHealth < 20)
   {
   	status = "Very Poor";
    //return "Very Poor";
	  death(10);
	   for (i = 0; i < setupController.playerStatus.length; i++)
       {
 	       setupController.playerStatus[4].alive = false;
   	     deathIndex--;
	     }
   }else if (groupHealth == 0)
   {
	  status = "Dead";
	  //return "Everyone is dead";
   }
}


//the function being used in case someone dies
function death (deathProbability, deathIndex, alive)
{
	var randomNum = Math.floor(Math.random() * 100);

	console.log(randomNum);

		if (randomNum < deathProbability)
    {
			console.log("Death");
			for (i = 0; i < setupController.playerStatus.length; i++)
      {
		      setupController.playerStatus[4].alive = false;
		      deathIndex--;
			}
    }
};

exports.getGameData = function()
{
   return new gameData();
}


//start month
function startMonth(month)
{
  this.month = month;
}

exports.getStartMonth = function(month)
 {
   return new startMonth(month);
}



//if you reach 500 miles you win the Game
exports.winGame = function(milesTraveled, messages)
{
  if (milesTraveled >= 500)
    {
      return "Congrats, you have won the game!";
      console.log("Congrats, you have won the game!")
    }

};


//if your groups health reaches 0, or your day count reaches 45, you lose
exports.loseGame = function(groupHealth, milesTraveled, daysOnTrail, messages)
{
  if (groupHealth <= 0 || daysOnTrail >=45)
    {
      return "Sorry, you have lost the game";
      console.log("Sorry, you have lost the game");
    }
};

exports.gameSettings = new gameData();
exports.startGameScreens = [];
