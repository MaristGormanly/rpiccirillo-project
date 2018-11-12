//weather object with id,name,healthchange, mileChange, probChance
function weather (id, weatherType, healthChange, mileChange, probChance)
{
	this.id = id;
	this.weatherType = weatherType;
	this.healthChange = healthChange;
	this.mileChange = mileChange;
	this.probChance = probChance;
}

//all the weather tyes and their attributes
var weatherArray = [];
weatherArray.push(new weather(0, "Very Hot", -8, .7, .1));
weatherArray.push(new weather(1, "Hot", -3, .9, .1));
weatherArray.push(new weather(2, "Warm", 1, 1, .2));
weatherArray.push(new weather(3, "Cool", 1, .95, .1));
weatherArray.push(new weather(4, "Cold", -5, .8, .1));
weatherArray.push(new weather(5, "Very Cold", -12, .7, .1));
weatherArray.push(new weather(6, "Rain", -4, .6, .1));
weatherArray.push(new weather(7, "Heavy Rain", -8, .4, .05));
weatherArray.push(new weather(8, "Snow", -15, .3, .05));
weatherArray.push(new weather(9, "Blizzard", -30, .1, .05));
weatherArray.push(new weather(10, "Heavy Fog", -3, .5, .05));


//prints all the weatherTypes when requested
exports.getAllWeather = function()
	{
		return weatherArray;
	};


//prints a random weatherType
exports.getRandomWeather = function ()
{
	var randomNum = Math.floor(Math.random() * 100);
	var groupHealth = 100;
	var mileChange = 0;

	//veryHot
	if(randomNum >= 0 && randomNum <= 9)
	{
		return weatherArray[0];
		console.log("The weatherType is Very Hot");
	}

	//hot
	else if(randomNum >= 10 && randomNum <= 19)
	{
		return weatherArray[1];
		console.log("The weatherType is Hot");
	}

	//warm
	else if(randomNum >= 20 && randomNum <= 39)
	{
		return weatherArray[2];
		console.log("The weatherType is Warm");
	}

	//cool
	else if(randomNum >= 40 && randomNum <= 49)
	{
		return weatherArray[3];
		console.log("The weatherType is Cool");
	}

	//cold
	else if(randomNum >= 50 && randomNum <= 59)
	{
		return weatherArray[4];
		console.log("The weatherType is Cold");
	}

	//very cold
	else if(randomNum >= 60 && randomNum <= 69)
	{
		return weatherArray[5];
		console.log("The weatherType is Very Cold");
	}

	//rain
	else if(randomNum >= 70 && randomNum <= 79)
	{
		return weatherArray[6];
		console.log("The weatherType is Rain");
	}

	//heavy rain
	else if(randomNum >= 80 && randomNum <= 84)
	{
		return weatherArray[7];
		console.log("The weatherType is Heavy Rain");
	}

	//snow
	else if(randomNum >= 85 && randomNum <= 89)
	{
		return weatherArray[8];
		console.log("The weatherType is Snow");
	}

	//blizzard
	else if(randomNum >= 90 && randomNum <= 94)
	{
		return weatherArray[9];
		console.log("The weatherType is Blizzard");
	}

	//heavy fog
	else if(randomNum >= 95 && randomNum <= 99)
	{
		return weatherArray[10];
		console.log("The weatherType is Heavy Fog");
	}

};
