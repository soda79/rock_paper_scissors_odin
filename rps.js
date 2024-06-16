let comChoice;
let userChoice;
let comScore = 0;
let userScore = 0;

const rps = ["Rock", "Paper", "Scissors"];

let DisplayUserScore = document.querySelector("#user_score")
let DisplayComScore = document.querySelector("#com_score")

const buttons = document.querySelectorAll("button")
const startBtn = document.querySelector(".start");
const options = document.querySelector(".options_container")

const gameEnd = document.querySelector(".game_end")
const userWin = document.querySelector("#user_wins");
const comWin = document.querySelector("#com_wins");
const retryBtn = document.querySelector("#try_again_btn");

const rockBtn = document.querySelector("#rock_btn");
const paperBtn = document.querySelector("#paper_btn");
const scissorsBtn = document.querySelector("#scissors_btn");

const userRock = document.querySelector("#user_rock");
const userPaper = document.querySelector("#user_paper");
const userScissors = document.querySelector("#user_scissors");
const user = [userRock, userPaper, userScissors];

const comRock = document.querySelector("#com_rock");
const comPaper = document.querySelector("#com_paper");
const comScissors = document.querySelector("#com_scissors");
const com = [comRock, comPaper, comScissors];

const perma = [userRock, comRock];
const temp = [userPaper, userScissors, comPaper, comScissors];

function Game(){
    comChoice = rps[Math.floor(Math.random()*3)];

    if(userChoice === comChoice){
        //do nothing
    }
    else if(userChoice == rps[0] && comChoice == rps[2]){
        userScore++;
    }
    else if(userChoice == rps[1] && comChoice == rps[0]){
        userScore++;
    }
    else if(userChoice == rps[2] && comChoice == rps[1]){
        userScore++;
    }
    else{
        comScore++;
    }

    if(userScore == 5){
        setTimeout(()=>{gameEnd.style.display = "flex";
        userWin.style.display = "flex"},4000);
    }
    else if(comScore == 5){
        setTimeout(()=>{gameEnd.style.display = "flex";
        comWin.style.display = "flex"},4000);
    }
}


function Start(){
    startBtn.style.display = "none";
    options.style.display = "flex";

    user[0].style.animation = "touch_user 1s 1";
    com[0].style.animation = "touch_com 1s 1";

    setTimeout(()=>{
        user[0].style.animation = "float 2s infinite";
        com[0].style.animation = "float 2s infinite";
    }, 1000)
}

function Roll(){
    Game();

    perma.forEach(element =>{element.classList.replace("shown", "roll")});
    buttons.forEach(element =>{element.disabled = "true"});
    buttons.forEach(element =>{element.classList.add("no_hover")});

    setTimeout(()=>{
        if(comChoice == rps[0]){com[0].classList.replace("roll", "drawn");}
        else if(comChoice == rps[1]){
            com[0].classList.replace("roll", "hidden"); 
            com[1].classList.replace("hidden", "drawn");
        }
        else if(comChoice == rps[2]){
            com[0].classList.replace("roll", "hidden"); 
            com[2].classList.replace("hidden", "drawn");
        }
    },1200)

    setTimeout(()=>{
        if(userChoice == rps[0]){user[0].classList.replace("roll", "drawn");}
        else if(userChoice == rps[1]){
            user[0].classList.replace("roll", "hidden"); 
            user[1].classList.replace("hidden", "drawn");
        }
        else if(userChoice == rps[2]){
            user[0].classList.replace("roll", "hidden"); 
            user[2].classList.replace("hidden", "drawn");
        }
    },1200)
    
    setTimeout(Reset, 4000);
}

function Reset(){
    DisplayUserScore.textContent = userScore;
    DisplayComScore.textContent = comScore;

    temp.forEach(element =>{element.classList.replace("drawn", "hidden")});
    perma.forEach(element =>{element.classList.remove("hidden", "drawn")});
    perma.forEach(element =>{element.classList.add("shown")});

    buttons.forEach(element =>{element.removeAttribute("disabled")});
    buttons.forEach(element =>{element.classList.remove("no_hover")});
}

function Rock(){
    userChoice = rps[0];
    Roll();
}
function Paper(){
    userChoice = rps[1];
    Roll();
}
function Scissors(){
    userChoice = rps[2];
    Roll();
}

startBtn.addEventListener("click", Start)
rockBtn.addEventListener("click", Rock)
paperBtn.addEventListener("click", Paper)
scissorsBtn.addEventListener("click", Scissors)
retryBtn.addEventListener("click", ()=>{location.reload()})