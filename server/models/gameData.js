var terrain = require("./terrain");
var weather = require("./weather");
var pace = require("./pace");
var setupController = require('../controllers/setupController');

//player objects and characteristics
function player(playerName, playerStatus, playerProfession, playerMoney)
{
  this.playerName = playerName;
  this.playerStatus = playerStatus;
  this.playerProfession = playerProfession; //affects starting money
  this.playerMoney = playerMoney;
}


//party Players
function newPlayer(playerName)
{
  this.playerName = playerName;
}

//returns the new group members name
exports.getNewPlayerName = function(playerName)
 {
  return new newPlayer(playerName);
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
  this.currentPace = "";
  this.daysOnTrail = 0;
  this.currentWeather = weather.getRandomWeather();
  this.currentTerrain = terrain.getRandomTerrain();
  this.currentPlayers = [];
  //this.PlayerStatus = [];
  this.playerProfession = "banker";
  this.groupStatus = "";
  this.playerDeath = "";
  this.deathIndex = 4;
  this.status = "";
}

//checks groupHealth
exports.healthCheck = function(groupHealth, deathIndex, alive, groupStatus)
{
  var deathCheck = 4;

  if(groupHealth >= 80)
  {
    groupStatus = "Good";
    return "Good";
  }else if(groupHealth >= 50 && groupHealth< 80)
   {
     groupStatus = "Fair";
     return "Fair";
   }else if(groupHealth >= 20 && groupHealth < 50)
   {
     groupStatus = "Poor";
     return "Poor";
     death(3);
 	  for (i = 0; i < setupController.playerStatus.length; i++)
       {
 		     setupController.playerStatus[4].alive = false;
 		     deathIndex--;
       }
   }else if (groupHealth >0 && groupHealth < 20)
   {
   	groupStatus = "Very Poor";
    return "Very Poor";
	  death(10);
	   for (i = 0; i < setupController.playerStatus.length; i++)
       {
 	       setupController.playerStatus[4].alive = false;
   	     deathIndex--;
	     }
   }else if (groupHealth == 0)
   {
	  groupStatus = "Dead";
	  return "Everyone is dead";
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




// Create an empty array to contain our screens
exports.startGameScreens = [];


var startGame1 = "<h3>Many kinds of people made the trip to Oregon.</h3>"
+ "<h3>You may:</h3>"
+ "<ol id=\"setupQuestions1\" >"
+ "<h3 class=\"one\" id=\"bankerMenuItem\">(1) Be a banker from Boston</h3>"
+ "<h3 class=\"two\" id=\"carpenterMenuItem\">(2) Be a carpenter from Ohio</h3>"
+ "<h3 class=\"three\" id=\"farmerMenuItem\"> (3)Be a farmer from Illinois</h3>"
+ "<h3 class=\"four\" id=\"differencesMenuItem\"> (4)Find out the differences between the choices</h3>"
+ "<h3> <div id=\"selectedOption\">What is your choice?</div> </h3>";



var startGame2 = "<h3>What is the first name of the wagon leader?</h3>"
+ "<h3>Leader Name: <input id=\"leader\" /></h3>"
+ "<h3> <input type=\"button\" class=\"button-1\" id=\"page1sub\" value=\"Next\" /> </h3>";



var startGame3 = "<h3>What are the first names of the other members of your party?</h3>"

 + "<h3>Player Name: <input id=\"player1\" /></input?<br /></h3>"
 + "<h3>Player Name: <input id=\"player2\" /><br /></h3>"
 + "<h3>Player Name: <input id=\"player3\" /><br /></h3>"
 + "<h3>Player Name: <input id=\"player4\" /><br /></h3>"

+ "<h3><input type=\"button\" class=\"button-1\" id=\"page2sub\" value=\"Next\" /></h3>";



var startGame4 = "<h3>It is 1848. You're jumping off place for oregon is Independence, Missouri.</h3>"
+ "<h3>You must decide which month to leave Independence.</h3>"
+ "<h3><li id=\"marchItem\">March</li></h3>"
+ "<h3><ol id=\"setupQuestions2\" ></h3>"
+ "<h3><li id=\"aprilItem\">April</li></h3>"
+ "<h3><li id=\"mayItem\">May</li></h3>"
+ "<h3><li id=\"juneItem\">June</li></h3>"
+ "<h3><li id=\"julyItem\">July</li></h3>"
+ "</ol>"
+ "<h3><div id=\"selectedOption\">What is your choice?</div></h3>";



var startGame5 = "<h3>Congratulations! You are ready to start on your Journey!</h3>"
+ "<h3>Here are settings you selected for the game</h3>"
+ "<div id=\"returnData\">"
+ "<h3>Wagon Leader: <span id=\"player1Name\"></span><br </h3>"
+ "<h3>Member: <span id=\"player2Name\"></span><br </h3>"
+ "<h3>Member: <span id=\"player3Name\"></span><br </h3>"
+ "<h3>Member: <span id=\"player4Name\"></span><br </h3>"
+ "<h3>Member: <span id=\"player5Name\"></span><br </h3>"
+ "<h3>Your profession: <span id=\"professionName\"></span><br </h3>"
+ "<h3>Current bank account: <span id=\"money\"></span><br </h3>"
+ "<h3>Month leaving: <span id=\"month\"></span><br </h3>"
+ "<h3><id=\"pressEnter\">Press enter to travel the trail.</h3>"
+ "<h3> <id=\"pressSpace\">Press the space for the main menu.</h3>"
+ "</div>";

exports.startGameScreens.push(startGame1);
exports.startGameScreens.push(startGame2);
exports.startGameScreens.push(startGame3);
exports.startGameScreens.push(startGame4);
exports.startGameScreens.push(startGame5);
