//press space to go to the main menu
window.addEventListener("keydown", checkKeyPress, false);
function checkKeyPress(key)
{
  if (key.keyCode == "32")
  {
    window.location = 'http://localhost:1337/mainmenu';
  }
}

//array for my table
var myStats = [['','Rocco Piccirillo','6734', '10/29/05'],
['','Danny Devito', '0455','11/17/02'],
['','Anya Hixson', '9370', '07/31/07'],
['','Margot Robbie', '6615', '07/02/11'],
['','Horatio Crunch', '1323', '09/13/10'],
['', 'Ernst Chocula', '1133', '01/08/73'],
['', 'Brad FrankenBerry', '5204', '02/06/30'],
['', 'Bonny Burgers', '4924', '07/28/53'],
['', 'Booberry McIronKnob', '4368', '12/01/72'],
['', 'Steve Mcqueen', '2765', '04/10/15']];

//sorts for score
myStats.sort(function(a,b)
  {
  return b[2] - a[2];
  });

//declares the table
table = document.getElementById("table");

//prints all of the values of the array into the table, not sorting them
for(var i = 1; i < table.rows.length; i++)
{
    for(var j = 1; j <table.rows[i].cells.length; j++)
    {
        table.rows[i].cells[j].innerHTML = myStats[i-1][j];
    }
}

//sets up the audio in topten
var audio = new Audio('/music/OldeTimey.mp3');
var storedAudio = localStorage.getItem("music");

if(storedAudio == "true")
{
  audio.play();
}

audio.addEventListener('ended', function() {
  this.currentTime = 0;
  this.play();
}, false);
