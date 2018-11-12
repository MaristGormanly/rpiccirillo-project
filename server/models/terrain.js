//creates a terrain object with name and the Image url
function terrain (name, imageUrl)
{
	this.name =  name;
	this.imageUrl = imageUrl;
}

//stores the different types of terrain here, and their image URL's
var terrains = [];
terrains.push(new terrain("Mountain", "/images/mountain.jpg"));
terrains.push(new terrain("Grassland", "/images/grassland.jpg"));
terrains.push(new terrain("Plains", "/images/plains.jpg"));
terrains.push(new terrain("Forest", "/images/forest.jpg"));
terrains.push(new terrain("Desert", "/images/desert.jpg"));

//prints all of the terrains
exports.getAllTerrains = function()
 {
return terrains;
};

//makes usable and randomly prints a terrain
exports.getRandomTerrain = function ()
{
	var randomNum = Math.floor(Math.random() * terrains.length);
	return terrains[randomNum];
}
