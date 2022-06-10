
var buttons = document.querySelectorAll(".set button").length;

for(var i = 0; i < buttons; i++) {
document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

}
function handleClick(){
   
    var character = this.innerHTML;
    makeSound(character);
    buttonAnimation(character);
}

document.addEventListener("keydown", function(event) {
  var key = event.key;
  makeSound(key);
  buttonAnimation(key);
});

function makeSound(key){
    var sound;
    switch(key){
        case "w": sound = "sounds/tom-1.mp3";
                  break;
        case "a": sound = "sounds/tom-2.mp3";
                  break;
        case "s": sound = "sounds/tom-3.mp3";
                  break;
        case "d": sound = "sounds/tom-4.mp3";
                  break;
        case "j": sound = "sounds/snare.mp3";
                  break;
        case "k": sound = "sounds/crash.mp3";
                  break;
        case "l": sound = "sounds/kick-bass.mp3";
                  break;
    
        default: console.log(key);
    }
    var audio = new Audio(sound);
    audio.play();
}

function buttonAnimation(key){

     var buttonClass = document.querySelector("."+key);
     buttonClass.classList.add("pressed");
     setTimeout(function() {
         buttonClass.classList.remove("pressed");
     }, 100);
}