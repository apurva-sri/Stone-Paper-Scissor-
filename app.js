let countUserScore = 0;
let countCompScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscore = document.querySelector("#user-score");
const compscore = document.querySelector("#comp-score");


                   // GENERATING COMPUTER CHOICE---->

const genCompChoice = () =>{
    const options = ["rock", "paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);//Math.random function generate random numbers between 0-1 and Math.random()*3 generate no. btw 0-2, Math.random()*5 generate no. btw 0-4 etc..
    //Math.floor() convert decimal no. to integer by removing decimal part.
    return options[randIdx];//returning computer choice
}


                   // DRAW GAME---->

const drawGame = () => {
    msg.innerText = `Game Draw! Play Again`;
    msg.style.backgroundColor = "#081b31";

}


                   // SHOWING WINNER----->

const showWinner = (userwin,userChoice,compChoice) => {
    if(userwin===true){
        countUserScore++;
        msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userscore.innerText = `${countUserScore}`;

    }
    else{
        countCompScore++;
        msg.innerText =  `You Loose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compscore.innerText = `${countCompScore}`;

    }
}


                  //  COMPARING USER AND COMPUTER CHOICE------>

const playGame = (userChoice) =>{
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        //Draw game
        drawGame();
    }else{
        let userwin = true;
        if(userChoice === "rock"){
            //scissors, paper
            userwin = compChoice === "paper"? false : true;
        }
        else if(userChoice === "paper"){
            //rock, scissor
            userwin = compChoice === "scissors"? false : true;
        }
        else{
            //rock,paper
            userwin = compChoice === "rock"? false : true;
        }
        showWinner(userwin,userChoice,compChoice);
    }

}


                //  ADDING EVENT LISTENER TO EACH CHOICE------>

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})