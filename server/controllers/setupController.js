var gameData = require('../models/gameData');
var terrain = require('../models/terrain');
var weather = require('../models/weather');
var pace = require('../models/pace');
var gameData = require('../models/gameData');

exports.getCurrentPlayers = function(req, res)
{
  res.setHeader('Content-type', 'application/json');
  res.send(exports.currentPlayers)
}

//saves the leader name you choose
 exports.saveLeader = function(req, res)
 {
  gameData.gameSettings.currentPlayers[0] = req.body.leaderName;
console.log(gameData.gameSettings);
 	res.setHeader('Content-Type', 'application/json');
 	res.send(gameData.gameSettings.currentPlayers[0]);

 }

//saves the rest of your party
 exports.savePlayers = function(req, res)
 {
   gameData.gameSettings.currentPlayers[req.body.playerID] = req.body.playerName;
	  res.setHeader('Content-Type', 'application/json');
  	 res.send(gameData.gameSettings.currentPlayers[req.body.playerID]);
	}

exports.getProfession = function(req, res)
{
    res.setHeader('Content-Type', 'application/json');
    res.send(exports.playerProfession);
}

//saves the profession that you choose
exports.saveProfession = function(req, res)
{
 	console.log(req.body.profession);
	gameData.gameSettings.playerProfession = req.body.profession;
//console.log(gameData.gameSettings);
 res.setHeader('Content-Type', 'application/json');
 res.send(gameData.gameSettings.playerProfession);
}

//saves your money
exports.saveMoney = function(req, res)
{
  console.log(req.body.money);
  gameData.gameSettings.playerMoney = req.body.money;
  res.setHeader('Content-Type', 'application/json');
  res.send(gameData.gameSettings.playerMoney);
}

//retrieves your start month
exports.getStartMonth = function(req, res)
{
	res.setHeader('Content-Type', 'application/json');
  res.send(exports.startMonth)
}

//saves your starting month
  exports.saveMonth = function(req, res)
  {
  	console.log(req.body.month);
  	gameData.gameSettings.startMonth = req.body.month;
    console.log(gameData.gameSettings);
  	res.setHeader('Content-Type', 'application/json');
   	res.send(gameData.gameSettings.startMonth);
	}

exports.getgameScreen = function(req, res)
{
	var gameScreen = gameData.startGameScreens[req.params.id];

	res.setHeader('Content-Type', 'application/json');
	res.send(gameScreen);
};
