var gameData = require('../models/gameData');
var terrain = require('../models/terrain');
var weather = require('../models/weather');
var pace = require('../models/pace');
var setupController = require("./setupController");

var localGameData = gameData.getGameData();

exports.getGameData = function(req, res)
{
	res.setHeader('Content-Type', 'application/json'); //mime type
	res.send(localGameData);
}

//return random terrain
exports.getRandomTerrain = function(req, res)
{
  res.setHeader('Content-Type', 'application/json');
  res.send(terrain.getRandomTerrain());
}

//return random weather
exports.getRandomWeather = function(req, res)
 {
	res.setHeader('Content-Type', 'application/json');
	res.send(weather.getRandomWeather());
 }

//retrieves all Terrains
exports.getAllTerrains = function(req, res)
{
 	res.setHeader('Content-Type', 'application/json');
 	res.send(terrain.getAllTerrains());
}

//retrieves all Weather types
exports.getAllWeather = function(req, res)
{
 	res.setHeader('Content-Type', 'application/json');
 	res.send(weather.getAllWeather());
}

//retrives all of the paces
exports.getAllPace = function(req, res)
{
	res.setHeader('Content-Type', 'application/json'); //mime type
	res.send(pace.getAllPace());
}

//retrieves the current Pace
exports.getPace = function(req, res)
{
	res.setHeader('Content-Type', 'application/json');
	res.send(localGameData.currentPace);
}

//limits the amount of players to 5
exports.getPlayerNames = function(req, res)
{
  var playerNames = new Array();
  for (var i = 0; i < 5; i++)
   {
      playerNames[i] = gameData.gameSettings.currentPlayers[i].playerName
   }
  res.setHeader('Content-Type', 'application/json');
  res.send(playerNames);
}

//retrieves all the player names
exports.getAllplayers = function(req, res)
{
	res.setHeader('Content-Type', 'application/json');
	res.send(gameData.getAllplayers());
}

exports.getPlayerProfession = function(req, res)
{
	res.setHeader('Content-Type', 'application/json');
	res.send(gameData.getPlayerProfession());
}

exports.getPlayerMoney = function(req, res)
{
	res.setHeader('Content-Type', 'application/json');
	res.send(gameData.getPlayerMoney());
}

exports.getPlayerStatus = function(req, res)
{
	res.setHeader('Content-Type', 'application/json');
	res.send(gameData.getPlayerStatus());
}

exports.getAllStatus = function(req, res)
{
	res.setHeader('Content-Type', 'application/json');
	res.send(gameData.getAllStatus());
}

exports.getCurrentPlayers = function(req, res)
{
	res.setHeader('Content-Type', 'application/json'); //mime type
	res.send(gameData.getCurrentPlayers());
}

exports.getHealthCheck = function(req, res)
{
	res.setHeader('Content-Type', 'application/json');
	res.send(gameData.getHealthCheck());
}

exports.getNewDay = function(req, res)
{
	res.setHeader('Content-Type', 'application/json'); //mime type
	res.send(gameData.getNewDay());
}

exports.getDayCount = function(req, res)
 {
	res.setHeader('Content-Type', 'application/json');
	res.send(gameData.getDayCount());
 }

exports.getStartMonth = function(req, res)
{
	res.setHeader('Content-Type', 'application/json');
	res.send(gameData.getStartMonth());
}

//creates the gameSettings export
exports.getSettings = function(req, res)
{
  console.log("The profession is");
  console.log(gameData.gameSettings.playerProfession);
  res.setHeader('Content-Type', 'application/json');
  res.send(gameData.gameSettings);
}

//everything that resets if you restart the game
exports.restartGame = function(req, res)
{
  //automatically set the profession to banker for default
  localGameData.playerProfession = setupController.playerProfession[0];

  //reset the month back to 0
  localGameData.month = gameData.getStartMonth("March");

  //set the day back to 0
	localGameData.dayCount = 0;

	//randomizes weather
	localGameData.currentWeather = weather.getRandomWeather();

  //randomizes terrain
  localGameData.currentTerrain = terrain.getRandomTerrain();

	//the group health begins at 100
	localGameData.groupHealth = 100;

  //start at 0 miles traveled
  localGameData.milesTraveled = 0;

	//start the pace at steady
	localGameData.currentPace = pace.getPace()[0];

	//players' status
	localGameData.playerStatus = setupController.playerStatus;

	//gets the current players
	localGameData.currentplayers = setupController.currentplayers;

  //sets money back to the default 0
  localGameData.playerMoney = 0;

  res.setHeader('Content-Type', 'application/json');
  res.send(localGameData);
}

//runs when the game needs to be updated in any way
exports.updateGame = function(req, res)
{
  //players profession
  localGameData.playerProfession = setupController.playerProfession;

  //the stat month is defaulted as May
  localGameData.month = gameData.getStartMonth("March");

  //the day count increases by one everyday
	localGameData.dayCount++;

	//the weather is randomized every single day
	localGameData.currentWeather = weather.getRandomWeather();

  //the terrain is randomized every single day
  localGameData.currentTerrain = terrain.getRandomTerrain();

	//how your health gets affected by the weateher traveled
	localGameData.groupHealth += localGameData.currentWeather.healthChange;

  //depending on the weather, your milesTraveled changes
  localGameData.milesTraveled += localGameData.currentWeather.mileChange;

  //depending on your pace, you add a certain amount of mileage
  localGameData.milesTraveled += localGameData.currentPace.paceMiles;

	//depending on the pace you choose, this updates your current pace
	localGameData.currentPace = pace.getPace();

	//depnding on what the pace, your health may be affected
	localGameData.groupHealth += localGameData.currentPace.healthChange;

	//finds the status of the players
	localGameData.playerStatus = setupController.playerStatus;

	//retrieves the players
	localGameData.currentplayers = setupController.currentplayers;

   //if your groups health reaches 0, or your day count reaches 45 you lose
	if (localGameData.groupHealth <= 0 || localGameData.dayCount >=45)
   {
			console.log("Sorry, you have lost the Oregon Trail.");
	 }

	//death check
	localGameData.groupStatus = gameData.healthCheck(localGameData.groupHealth);

	res.setHeader('Content-Type', 'application/json');
	res.send(localGameData);
}

exports.loseGame = function(req, res)
{
	res.setHeader('Content-Type', 'application/json'); //mime type
	res.send(localGameData.loseGame());
}

exports.winGame = function(req, res)
{
	res.setHeader('Content-Type', 'application/json'); //mime type
	res.send(localGameData.winGame());
}

exports.deathChance = function(req, res)
{
	res.setHeader('Content-Type', 'application/json');
	res.send(gameData.deathChance());
}
