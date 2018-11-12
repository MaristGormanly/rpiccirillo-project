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
