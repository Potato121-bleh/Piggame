
const jsConfetti = new JSConfetti();
let button = document.getElementById("congrat-txt");


button.onclick = function(){
    let audio = new Audio("mariosound.mp3");
    audio.play();
    setTimeout(() => {
        jsConfetti.addConfetti();
    }, 5000);
}