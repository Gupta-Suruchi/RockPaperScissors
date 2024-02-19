let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#userScore");
const compscorepara = document.querySelector("#compScore");


choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log(userChoice);
        compGame(userChoice);
    })
})

const compMove = () => {
   const options = ["rock", "paper", "scissors"];
   const ranIndx = Math.floor(Math.random()*3);
   return options[ranIndx];
}

const drawGame = () => {
    msg.innerText = "Game draw!"
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userscorepara.innerText = userScore;

        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#7CAE7A";
    }
    else {
        comScore++;
        compscorepara.innerText = comScore;
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "#E56399";
    }
}

const compGame = (userChoice) => {
    const compChoice = compMove();
    console.log("comp choice ", compChoice);

    if(userChoice === compChoice)
    {
            drawGame();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            // scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};