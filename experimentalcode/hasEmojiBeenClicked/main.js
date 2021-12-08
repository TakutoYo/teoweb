var hasEmojiBeenClicked = false
function changeEmoji() {
if (hasEmojiBeenClicked == false){
  document.getElementById("changeEmoji").innerHTML= '<i class="fas fa-grin-beam"></i>' ;
  hasEmojiBeenClicked = true;
}

else {
  document.getElementById("changeEmoji").innerHTML= '<i class="fas fa-grin-alt"></i>' ;
  hasEmojiBeenClicked = false;
}
}
