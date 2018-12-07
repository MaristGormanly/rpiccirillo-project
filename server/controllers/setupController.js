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
 	console.log(req.body.playerName);
 	//gameData.gameSettings.currentPlayers[0] = gameData.getNewPlayerName(req.body.playerName);
  gameData.gameSettings.currentPlayers[0] = req.body.leaderName;
console.log(gameData.gameSettings);
 	res.setHeader('Content-Type', 'application/json');
 	res.send(gameData.gameSettings.currentPlayers[0]);

 }


//saves the rest of your party
 exports.savePlayers = function(req, res)
 {
   console.log("test");
	/*gameData.gameSettings.currentPlayer[1] = gameData.getNewPlayerName(req.body.playerName);
	gameData.gameSettings.currentPlayer[2] = gameData.getNewPlayerName(req.body.playerName);
	gameData.gameSettings.currentPlayer[3] = gameData.getNewPlayerName(req.body.playerName);
	gameData.gameSettings.currentPlayer[4] = gameData.getNewPlayerName(req.body.playerName);*/

//gameData.gameSettings.currentPlayers[req.body.playerID] = req.body.playerName;
console.log(req.body);
	console.log("1" + req.body.playerID);
  console.log("2" + req.body.playerName);
gameData.gameSettings.currentPlayers[req.body.playerID] = req.body.playerName;
  //gameData.gameSettings.currentPlayers[0] = req.body.leaderName;
/*  gameData.gameSettings.currentPlayers[1] = req.body.playerName;
  gameData.gameSettings.currentPlayers[2] = req.body.playerName;
  gameData.gameSettings.currentPlayers[3] = req.body.playerName;
  gameData.gameSettings.currentPlayers[4] = req.body.playerName;*/


	res.setHeader('Content-Type', 'application/json');
 //	res.send(gameData.gameSettings.currentPlayer);
  	res.send(gameData.gameSettings.currentPlayers[req.body.playerID]);
     /*	res.send(gameData.gameSettings.currentPlayers[2]);
       	res.send(gameData.gameSettings.currentPlayers[3]);
         	res.send(gameData.gameSettings.currentPlayers[4]);*/
	}

//everyones status is true becasue they all start off alive
/*exports.playerStatus = [];
exports.playerStatus.push(gameData.getPlayerStatus(true));
exports.playerStatus.push(gameData.getPlayerStatus(true));
exports.playerStatus.push(gameData.getPlayerStatus(true));
exports.playerStatus.push(gameData.getPlayerStatus(true));
exports.playerStatus.push(gameData.getPlayerStatus(true));*/

//this is for the new players so they can get a new status
exports.getNewPlayerStatus = function(req, res)
{
    var newPlayerStatus = gameData.getPlayerStatus(req.body.status)

    res.setHeader('Content-Type', 'application/json');
    res.send(exports.playerStatus);
}

//sets up and exports the three professions
/*exports.playerProfession = [];
exports.playerProfession.push(gameData.getPlayerProfession("Banker", 2000));
exports.playerProfession.push(gameData.getPlayerProfession("Carpenter", 1800));
exports.playerProfession.push(gameData.getPlayerProfession("Farmer", 1500));*/

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

/*exports.getMoney = function(req, res)
{
    res.setHeader('Content-Type', 'application/json');
    res.send(exports.playerMoney);
}*/

exports.saveMoney = function(req, res)
{
  console.log(req.body.money);
  gameData.gameSettings.playerMoney = req.body.money;
  res.setHeader('Content-Type', 'application/json');
  res.send(gameData.gameSettings.playerMoney);
}

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
