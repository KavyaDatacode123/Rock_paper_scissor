let userScore =0;
let compScore =0;

const choices =document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");



const genComputerChoice=()=>{
const options = ["rock","paper","scissors"]
const randIdx = Math.floor(Math.random()*3 );
return options[randIdx];
};
const drawGame = ()=>{
  console.log("game was draw");
  msg.innerText = "its a draw";
  msg.style.backgroundColor = "yellow"; // Corrected
};

const showWinner = (userWin , userChoice , compChoice)=>{
  if(userWin){
    userScore++;
    userscorepara.innerText = userScore;
    console.log("you win");
    msg.innerText = `you win! , ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green"; // Corrected
  }else{
    compScore++;
    compscorepara.innerText = compScore;
    console.log("you lose");
    msg.innerText = `you lose!, ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red"; // Corrected
  }
};
const playGame=(userChoice)=>{
  console.log("user choice =",userChoice);

  const compChoice = genComputerChoice();
  console.log("comp choice = ",compChoice);

if(userChoice === compChoice){
  drawGame();
}
else{
  let userWin = true;
  if(userChoice === "rock"){
    userWin = compChoice === "paper" ? false : true;
}else if(userChoice === "paper"){
    userWin = compChoice === "scissors" ? false : true;
}else{
    userWin = compChoice === "rock" ? false : true;
}


  showWinner(userWin , userChoice , compChoice);
}


};



choices.forEach((choice)=>{
  choice.addEventListener("click",()=>{
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

 