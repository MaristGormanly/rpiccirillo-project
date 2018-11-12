	var gameData = require("./gameData");
	var weather = require("./weather");
	var pace1 = require("./pace");

//created a pace object to store pace and its characteristics
	function pace (paceName, paceMiles, healthChange)
	{
		this.paceName = paceName;
		this.paceMiles = paceMiles;
		this.healthChange = healthChange;

	}

//creates all of the paces, their miles, and health changes
	var paceArray = [];
		paceArray.push(new pace("Steady", 20, 0));
		paceArray.push(new pace("Strenuous", 30, -3));
		paceArray.push(new pace("Grueling", 35, -8));
		paceArray.push(new pace("Resting", 0, 5));


	//returns all four paces when requested, used for testing
  exports.getAllPace = function ()
	{
		return paceArray;
	}


//gets a starting steady pace for the user to begin with
	exports.getPace = function ()
	{
		return paceArray[0];
	}
