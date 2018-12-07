const express = require('express')
const app = express();
app.use(express.static('client/public'));

var bodyParser = require('body-parser');
app.use(bodyParser.json({ type: 'application/json' }));
const port = 1337

app.get('/', function (req, res) {
res.sendFile('index.html', {root: './client/views' })
})

app.get('/mainmenu', function (req, res) {
res.sendFile('mainmenu.html', {root: './client/views' })
})

app.get('/topten', function (req, res) {
res.sendFile('topten.html', {root: './client/views' })
})

app.get('/setup', function (req, res) {
res.sendFile('setup.html', {root: './client/views' })
})

app.get('/trail', function (req, res) {
res.sendFile('trail.html', {root: './client/views' })
})

//access data in topTenController
var topTenController = require('./controllers/topTenController');

//access data in setupController
var setupController = require('./controllers/setupController');

//access data in gameController
var gameController = require('./controllers/gameController');

//access data in gameData
var gameData = require('./models/gameData');

app.route('/api/gameController/getGameData')
  .get(gameController.getGameData);

  app.route('/api/getRandomTerrain')
  	.get(gameController.getRandomTerrain);

  app.route('/api/getRandomWeather')
  	.get(gameController.getRandomWeather);

  app.route('/api/getAllTerrains')
    .get(gameController.getAllTerrains);

  app.route('/api/getAllWeather')
  	.get(gameController.getAllWeather);

  app.route('/api/getAllPace')
    .get(gameController.getAllPace);

  app.route('/api/changeDay')
  	.get(gameController.getNewDay);

  app.route('/api/updateGame')
    .get(gameController.updateGame)
    .get(gameController.loseGame);

  app.route('/api/restartGame')
    .get(gameController.restartGame);

    app.route('/api/getPace')
      .get(gameController.getPace)

  app.route('/api/setup/screen/:id')
  	.get(setupController.getgameScreen)

  app.route('/api/setup/saveProfession')
  	.post(setupController.saveProfession);

  app.route('/api/setup/saveMoney')
    .post(setupController.saveMoney);

  app.route('/setup/getSettings')
    .get(gameController.getSettings);

  app.route('/api/setup/month')
  	.post(setupController.saveMonth);

  app.route('/api/setup/leaderName')
  	.post(setupController.saveLeader);

  app.route('/api/setupController/playerSaved')
    .post(setupController.savePlayers);

app.route('/api/gameController/getPlayerNames')
  .get(gameController.getPlayerNames);

//app.route('/trail/updatePace')
  //.get(gameController.changePace);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
