let comChoice;
let userChoice;
let comScore = 0;
let userScore = 0;
let round = 1;

let DisplaycomScore = document.getElementById("com_score");
let DisplayuserScore = document.getElementById("user_score");
let DisplayRoundNumber = document.getElementById("round_number");

let DisplayRound = document.querySelector(".round")
let rpsHeading = document.querySelector(".rps_heading");

let overlay = document.querySelector(".overlay");
let overlayContainer = document.querySelector(".overlay_container");
let restartButton = document.getElementById("restart_btn");

let tie = document.getElementById("tie");
let comWin = document.getElementById("com_win");
let userWin = document.getElementById("user_win");

let start = document.getElementById("start_btn");

let rock_btn = document.getElementById("rock_btn");
let paper_btn = document.getElementById("paper_btn");
let scissors_btn = document.getElementById("scissors_btn");

let options_Container = document.querySelector(".rock_paper_scissors_btn_container")

let user_rock = document.querySelector(".user_rock");
let user_paper = document.querySelector(".user_paper");
let user_scissors = document.querySelector(".user_scissors");

let com_rock = document.querySelector(".com_rock");
let com_paper = document.querySelector(".com_paper");
let com_scissors = document.querySelector(".com_scissors");




const rps = ["Rock", "Paper", "Scissors"];


function Game(){
    let random = Math.floor(Math.random()*3);
    comChoice = rps[random];

    if (comChoice === userChoice){
        return;
    }
    else if(comChoice == rps[0] && userChoice == rps[1]){
        userScore++;
    }
    else if(comChoice == rps[1] && userChoice == rps[0]){
        comScore++;
    }
    else if(comChoice == rps[0] && userChoice == rps[2]){
        comScore++;
    }
    else if(comChoice == rps[2] && userChoice == rps[0]){
        userScore++;
    }
    else if(comChoice == rps[1] && userChoice == rps[2]){
        userScore++;
    }
    else if(comChoice == rps[2] && userChoice == rps[1]){
        comScore++;
    }
}

restartButton.addEventListener("click", function(){{location.reload()}});

let checkConditio = setInterval(function(){
    if(round===6 && comScore === userScore){
        overlay.style.display = "flex";
        overlayContainer.style.display = "flex";
        restartButton.style.display = "flex";
    
        tie.style.display = "flex";
        userWin.style.display = "none";
        comWin.style.display = "none";
    }
    else if(round===6 && comScore > userScore){
        overlay.style.display = "flex";
        overlayContainer.style.display = "flex";
        restartButton.style.display = "flex";
    
    
        comWin.style.display = "flex";
        userWin.style.display = "none";
        tie.style.display = "none";
    }
    else if(round===6 && comScore < userScore){
        overlay.style.display = "flex";
        overlayContainer.style.display = "flex";
    
        userWin.style.display = "flex";
        comWin.style.display = "none";
        tie.style.display = "none";
    }
}, 500)


function DelayedDisplayScore(){
    DisplaycomScore.textContent = comScore;
    DisplayuserScore.textContent = userScore;
}

function DelayedDisplayRound(){
    round++;
    DisplayRoundNumber.textContent = round;
}

function startButton(){
    start.style.display = "none";
    options_Container.style.display = "flex";
    
    user_rock.style.animation = "utouch 1s infinite";
    com_rock.style.animation = "ctouch 1s infinite";

    setTimeout(function(){
        user_rock.style.animation = "float 1s infinite";
        com_rock.style.animation = "float 1s infinite";
    }, 1000)

    rpsHeading.style.animation = "heading 1s 1"

    setTimeout(function(){
        rpsHeading.style.visibility = "hidden";
        DisplayRound.style.visibility = "visible";
        DisplayRound.style.animation = "round_fade 1s 1"
    }, 900)
}


function ComputerChoice(){
    if(comChoice == rps[0]){
        com_rock.style.animation = "drawn 500ms 1";
    }
    else if(comChoice == rps[1]){
        com_rock.style.display = "none";
        com_paper.style.display = "flex";
        com_paper.style.animation = "drawn 500ms 1";
    }
    else if(comChoice == rps[2]){
        com_rock.style.display = "none";
        com_scissors.style.display = "flex";
        com_scissors.style.animation = "drawn 500ms 1";
    }
    else{
        return;
    }
}

function OptionsDisabled(){
    let buttons = [rock_btn, paper_btn, scissors_btn]
    
    for(let btn of buttons){
        btn.style.backgroundColor = "lightgray";
        btn.style.color = "gray"; 
        btn.disabled = true;
    }


    setTimeout(function(){
        for(let btn of buttons){
            btn.style.backgroundColor = "white";
            btn.style.color = "black";
            btn.disabled = false;
        }
    }, 5000)
}

function userChoiceRock(){
    userChoice = rps[0];
    
    ();

    Game();

    user_rock.style.animation = "tap 500ms 3";
    com_rock.style.animation = "tap 500ms 3";
    
    
    OptionsDisabled();

    setTimeout(function(){
        user_rock.style.animation = "drawn 500ms 1";
        ComputerChoice();
        DelayedDisplayScore();
    }, 1650)

    setTimeout(function(){
        DelayedDisplayRound();
        com_rock.style.display = "flex";
        user_rock.style.animation = "float 1s infinite";
        com_rock.style.animation = "float 1s infinite";

        com_paper.style.display = "none";
        com_scissors.style.display = "none";
    }, 5000)
}

function userChoicePaper(){
    userChoice = rps[1];

    Game();

    user_rock.style.animation = "tap 500ms infinite";
    com_rock.style.animation = "tap 500ms infinite";

    OptionsDisabled();
    ();

    setTimeout(function(){
        user_rock.style.display = "none";
        user_paper.style.display = "flex";
        user_paper.style.animation = "drawn 500ms 1";
        ComputerChoice();
        DelayedDisplayScore();
    }, 2000)

    setTimeout(function(){
        DelayedDisplayScore();
        DelayedDisplayRound();
        user_paper.style.display = "none"
        user_rock.style.display = "flex";
        com_rock.style.display = "flex";
        user_rock.style.animation = "float 1s infinite";
        com_rock.style.animation = "float 1s infinite";
        
        com_paper.style.display = "none";
        com_scissors.style.display = "none";
    }, 5000)
}

function userChoiceScissors(){
    userChoice = rps[2];

    Game();

    user_rock.style.animation = "tap 500ms infinite";
    com_rock.style.animation = "tap 500ms infinite";
    
    OptionsDisabled();
    ();

    setTimeout(function(){
        user_rock.style.display = "none";
        user_scissors.style.display = "flex";
        user_scissors.style.animation = "drawn 500ms 1";
        ComputerChoice();
        DelayedDisplayScore();
    },2000)

    setTimeout(function(){
        DelayedDisplayScore();
        DelayedDisplayRound();
        user_scissors.style.display = "none"
        user_rock.style.display = "flex";
        com_rock.style.display = "flex";
        user_rock.style.animation = "float 1s infinite";
        com_rock.style.animation = "float 1s infinite";
        
        com_paper.style.display = "none";
        com_scissors.style.display = "none";
    }, 5000)
}




start.addEventListener("click", startButton);

rock_btn.addEventListener("click", userChoiceRock);
paper_btn.addEventListener("click", userChoicePaper);
scissors_btn.addEventListener("click", userChoiceScissors);