//created a topTen object with name, score, and the date the score was earned
function topTen(playerName, playerScore, dateEarned)
{
  this.playerName = playerName;
  this.playerScore = playerScore;
  this.dateEarned = dateEarned;
}

//makes usable in OregonTrail
exports.addNewTopScore = function(playerName, playerScore, dateEarned)
{
  return new topTen(playerName, playerScore, dateEarned);
}


var mysql = require('mysql');

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
  con.query("SELECT * FROM topten", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
