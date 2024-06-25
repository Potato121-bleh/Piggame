
let playernum = document.getElementById("")
let mysubmit = document.getElementById("mysubmit")
let values = [];
let diceimg = [];
let randomvalue;
let textresult = document.getElementById("resultofdice-text");
let imgresult = document.getElementById("resultofdice-img");
let playerscore = [0,0];
let player1startbox = document.getElementById("player1-start-box");
let player2startbox = document.getElementById("player2-start-box");
let maxplayerscore;
let scoredisplayP1 = document.getElementById("box-score-p1");
let scoredisplayP2 = document.getElementById("box-score-p2");
let audio = document.getElementById("background-audio");
let count = 0;
let Player1namevalue;
let Player2namevalue;
let playertitle1 = document.getElementById("title-of-p1");
let playertitle2 = document.getElementById("title-of-p2");

let Player1name = window.prompt("Username Player 1");
let Player2name = window.prompt("Username Player 2");

playertitle1.textContent = Player1name;
playertitle2.textContent = Player2name;
player1startbox.textContent = `${Player1name} Start`;
player2startbox.textContent = `${Player2name} Start`;

mysubmit.onclick = function(){
    let soundeffect = new Audio("Pew.mp3");
    soundeffect.play();
    playernum = document.getElementById("user-input-box").value;
    
    for(a = 0; a < playernum; a ++){
        randomvalue = Math.floor((Math.random()*6) +1);
        values.push(randomvalue);
        diceimg.push(`<img src="${randomvalue}.png">`)
    }
    if(values.includes(1)){
        resetresult(values);
    resetresult(diceimg);
    textresult.textContent = `You got 1, YOU LOSE :b`
    let soundeffect = new Audio("Bruh.mp3");
    soundeffect.play();
    playerscore[0] = 0;
    scoredisplayP1.textContent = playerscore[0];
    }
    else{
    textresult.textContent = `You got: ${values.join(", ")}`
    imgresult.innerHTML = diceimg;
    let sumvalues = values.reduce((a, b) => a + b);
        playerscore[0] += sumvalues;
        console.log(playerscore);
        scoredisplayP1.textContent = playerscore[0];
    resetinputbox();
    }
}

function dicerollingP1() {
    playernum = document.getElementById("user-input-box").value;
    
    for(a = 0; a < playernum; a ++){
        randomvalue = Math.floor((Math.random()*6) +1);
        values.push(randomvalue);
        diceimg.push(`<img src="${randomvalue}.png">`)
    }
    if(values.includes(1)){
        resetresult(values);
    resetresult(diceimg);
    textresult.textContent = `You got 1, YOU LOSE :b`
    let soundeffect = new Audio("Bruh.mp3");
    soundeffect.play();
    playerscore[0] = 0;
    scoredisplayP1.textContent = playerscore[0];
    }
    else{
    textresult.textContent = `You got: ${values.join(", ")}`
    imgresult.innerHTML = diceimg;
    let sumvalues = values.reduce((a, b) => a + b);
        playerscore[0] += sumvalues;
        console.log(playerscore);
        scoredisplayP1.textContent = playerscore[0];
    resetinputbox();
    }
}

function dicerollingP2() {
    playernum = document.getElementById("user-input-box").value;
    
    for(a = 0; a < playernum; a ++){
        randomvalue = Math.floor((Math.random()*6) +1);
        values.push(randomvalue);
        diceimg.push(`<img src="${randomvalue}.png">`)
    }
    if(values.includes(1)){
        resetresult(values);
    resetresult(diceimg);
    textresult.textContent = `You got 1, YOU LOSE :b`
    let soundeffect = new Audio("Bruh.mp3");
    soundeffect.play();
    playerscore[1] = 0;
    scoredisplayP2.textContent = playerscore[1];
    }
    else{
    textresult.textContent = `You got: ${values.join(", ")}`
    imgresult.innerHTML = diceimg;
    let sumvalues = values.reduce((a, b) => a + b);
    playerscore[1] += sumvalues;
    console.log(playerscore);
    scoredisplayP2.textContent = playerscore[1];
    resetinputbox();
    }
}

function resetresult(array) {
    while(array.length = 0){
        array.pop();
    }
    return array;
}
function resetinputbox(){
    playernum = document.getElementById("user-input-box").textContent = "";
    return playernum;
}

player1startbox.onclick = function(){
    //Soundeffect
    let soundeffect = new Audio("Pew.mp3");
    soundeffect.play();
    //sum up the score and push into playerscore as memory or storage.
    //reset the value of array and the input box
    resetresult(values);
    resetresult(diceimg);
    dicerollingP1();
    resetinputbox();
    maxplayerscore = Math.max(...playerscore);
    if(maxplayerscore >= 100) {
        window.location.assign("Player1win.html");
    }
    else{
        console.log(maxplayerscore);
    }

}
player2startbox.onclick = function(){
    //sound effect
    let soundeffect = new Audio("Pew.mp3");
    soundeffect.play();
        //sum up the score and push into playerscore as memory or storage.
        //reset the value of array and the input box
        resetresult(values);
        resetresult(diceimg);
        dicerollingP2();
        resetinputbox();
        maxplayerscore = Math.max(...playerscore);
        if(maxplayerscore >= 100) {
            window.location.assign("Player2win.html");
        }
        else{
            console.log(maxplayerscore);
        }
    
}
//Audio section
let music = new Audio("gametheme.mp3");
audio.onclick = function(){
    count += 1;
    if(count % 2 == 0){
        music.pause();
    }
    else {
    music.play();
    }
}
