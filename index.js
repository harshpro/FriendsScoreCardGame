//ScoreCards
let firstScore = document.getElementById("scoreFirstOne");
let secondScore = document.getElementById("scoreFirstTwo");

//AddScoreForFirstScoreCard
let addOneOneScore = document.getElementById("addOneOne");
let addOneTwoScore = document.getElementById("addOneTwo");
let addOneThreeScore = document.getElementById("addOneThree");

//AddScoreForSecondScoreCard
let addTwoOneScore = document.getElementById("addTwoOne");
let addTwoTwoScore = document.getElementById("addTwoTwo");
let addTwoThreeScore = document.getElementById("addTwoThree");

//WonMessage
let wonWho = document.getElementById("wonWon");

//global
let initialOne = 0;
let initialTwo = 0;

//ScoreForFirst
function clickedOneFirst(){
    let count = 1;
    initialOne = initialOne + count;
    firstScore.textContent = initialOne;
    if(initialOne >= 10){
        wonWho.textContent = "हर्ष👑 won";
    }
    
    if(wonWho.textContent =="हर्ष👑 won"){
        firstScore.textContent = 0;
        initialOne = 0;
        setTimeout(() => {
            wonWho.textContent = "play again"}, 1000);
    }
}

function clickedOneSecond(){
    let count = 2;
    initialOne = initialOne + count;
    firstScore.textContent = initialOne;
    if(initialOne >= 10){
        wonWho.textContent = "हर्ष👑 won";
    }
    if(wonWho.textContent =="हर्ष👑 won"){
        firstScore.textContent = 0;
        initialOne = 0;
        setTimeout(() => {
            wonWho.textContent = "play again"}, 1000);
    }
}

function clickedOneThree(){
    let count = 3;
    initialOne = initialOne + count;
    firstScore.textContent = initialOne;
    if(initialOne >= 10){
        wonWho.textContent = "हर्ष👑 won";
    }
    
    if(wonWho.textContent =="हर्ष👑 won"){
        firstScore.textContent = 0;
        initialOne = 0;
        setTimeout(() => {
            wonWho.textContent = "play again"}, 1000);
    }
}

//ScoreForSecond

function clickedTwoFirst(){
    let count = 1;
    initialTwo = initialTwo + count;
    secondScore.textContent = initialTwo;
    if(initialTwo >= 10){
        wonWho.textContent = "उद्देश🥱 won";
    }
    
    if(wonWho.textContent =="उद्देश🥱 won"){
        secondScore.textContent = 0;
        initialOne = 0;
        setTimeout(() => {
            wonWho.textContent = "play again"}, 1000);
    }
}

function clickedTwoSecond(){
    let count = 2;
    initialTwo = initialTwo + count;
    secondScore.textContent = initialTwo;
    if(initialTwo >= 10){
        wonWho.textContent = "उद्देश🥱 won";
    }
    if(wonWho.textContent =="उद्देश🥱 won"){
        secondScore.textContent = 0;
        initialOne = 0;
        setTimeout(() => {
            wonWho.textContent = "play again"}, 1000);
    }
}

function clickedTwoThree(){
    let count = 3;
    initialTwo = initialTwo + count;
    secondScore.textContent = initialTwo;
    if(initialTwo >= 10){
        wonWho.textContent = "उद्देश🥱 won";
    }
    if(wonWho.textContent =="उद्देश🥱 won"){
        secondScore.textContent = 0;
        initialOne = 0;
        setTimeout(() => {
            wonWho.textContent = "play again"}, 1000);
    }
}





