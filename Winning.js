
const jsConfetti = new JSConfetti();
let button = document.getElementById("congrat-txt");


button.onclick = function(){
    let audio = new Audio("Mariosound.mp3");
    audio.play();
    setTimeout(() => {
        jsConfetti.addConfetti();
    }, 5000);
}