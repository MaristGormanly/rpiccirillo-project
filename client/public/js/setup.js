//press the spacebar to go the mainmenu
window.addEventListener("keydown", checkKeyPress, false);
function checkKeyPress(key){
  if (key.keyCode == "32"){
    window.location = 'http://localhost:1337/mainmenu';
  }
}
