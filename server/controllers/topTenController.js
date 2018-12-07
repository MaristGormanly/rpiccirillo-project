var topTen = require('../models/topTen');
var mysql = require("mysql");
//three test names
exports.currentTopScores = [];
exports.currentTopScores.push(topTen.addNewTopScore("Rocco", 10, "10/15/2018"));
exports.currentTopScores.push(topTen.addNewTopScore("Danny", 20, "10/15/2018"));
exports.currentTopScores.push(topTen.addNewTopScore("Anya", 68, "10/15/2018"));

exports.getCurrentScores = function(req, res)
{
  res.setHeader('Content-type', 'application/json');
  res.send(exports.currentTopScores)
}
//saves the new highscore
exports.saveHighScores = function(req, res)
{
  var highScore = topTen.addNewTopScore(req.body.playerName, req.body.playerScore, req.body.playerDate);
  exports.currentTopScores.push(highScore);
  res.setHeader('Content-type', 'application/json');
  res.send(exports.currentTopScores);
}

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Pickles29",
  database: "topTenOregonTrail"
});

con.connect(function(err) {
  if (err) throw err;
con.query("Use toptenoregontrail", function (err, result, fields)
{
 if (err) throw err;
 console.log(result);
});
});
