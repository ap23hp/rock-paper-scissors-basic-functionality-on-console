  let humanScore = 0;
  let computerScore = 0;

const rockButton=document.querySelector('.rock-btn')
const paperButton=document.querySelector('.paper-btn')
const scissorsButton=document.querySelector('.scissors-btn')

const allButtons=document.querySelectorAll('.btn')
const divResult=document.querySelector('.show-results')
const humanScoretext=document.querySelector('.show-scors-human')
const computerScoretext=document.querySelector('.show-scors-computer')
getHumanChoice = function (choice) {
  console.log(choice, "human-choice");
  return choice;
};


const playGame = function (humanChoice,computerChoice) {
 if (humanChoice === "Rock" && computerChoice === "Paper") {
   divResult.innerText=`you selected ${humanChoice} and computer selected ${computerChoice} , You Lose! Paper beats Rock`
    return "computer";
  } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
  divResult.innerText=`you selected ${humanChoice} and computer selected ${computerChoice}, You Lose! rock beats scissors`;
    return "computer";
  } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
  divResult.innerText=`you selected ${humanChoice} and computer selected ${computerChoice}, You Lose! scissors beats paper`;
    return "computer";
  } else if (humanChoice === "Paper" && computerChoice === "Rock") {
   divResult.innerText=` you selected ${humanChoice} and computer selected ${computerChoice}, You Win! paper beats rock`;
    return "human";
  } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
divResult.innerText=`you selected ${humanChoice} and computer selected ${computerChoice}, You Win! scissors beats paper`;
    return "human";
  } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
    divResult.innerText=`you selected ${humanChoice} and computer selected ${computerChoice} , You Win! rock beats scissors`;
    return "human";
  } else if (humanChoice === computerChoice) {
divResult.innerText=`you selected ${humanChoice} and computer selected ${computerChoice} ,it is a Tie, play again`;
    return "tie";
  }


}
 
function getComputerChoice(rand) {
  console.log(rand, "comp-choice");
  if (rand === 1) {
    return "Rock";
  } else if (rand === 2) {
    return "Paper";
  } else if (rand === 3) {
    return "Scissors";
  }
}
allButtons.forEach(function(ele){

ele.addEventListener("click",function(e){
      let humanChoice=e.target.innerText
let computerChoice=getComputerChoice(Math.trunc(Math.random() * 3 + 1));
console.log(humanChoice,'this is human choice',computerChoice, 'this is comp chice')

let result =playGame(humanChoice,computerChoice)
if (result === "computer") {
    computerScore++;
computerScoretext.innerText= computerScore + `  -----> this is computer's score`;
if(computerScore===5){
    divResult.innerText="COMPUTER WINS THE GAME!!!!!!!"
     allButtons.forEach(btn => btn.disabled = true);

}

  } else if (result === "human") {
    humanScore++;
    humanScoretext.innerText=humanScore  +` -- -----> this is human's score`;
    if(humanScore===5){
  divResult.innerText="YOU WIN THE GAME!!!!!!!!"
   allButtons.forEach(btn => btn.disabled = true);

    }
  }



})

 
})


// //let randNum = Math.trunc(Math.random() * 3 + 1);

// //getComputerChoice(Math.trunc(Math.random() * 3 + 1));

// //let promptFromUser = prompt("Enter your choice").toLowerCase();
// getHumanChoice = function (choice) {
//   console.log(choice, "human-choice");
//   return choice;
// };
// //getHumanChoice(prompt("Enter your choice").toLowerCase());

// const playRound = function (humanChoice, computerChoice) {
//   if (humanChoice === "rock" && computerChoice === "paper") {
//     console.log("You Lose! Paper beats Rock");
//     return "computer";
//   } else if (humanChoice === "scissors" && computerChoice === "rock") {
//     console.log("You Lose! rock beats scissors");
//     return "computer";
//   } else if (humanChoice === "paper" && computerChoice === "scissors") {
//     console.log("You Lose! scissors beats paper");
//     return "computer";
//   } else if (humanChoice === "paper" && computerChoice === "rock") {
//     console.log("You Win! paper beats rock");
//     return "human";
//   } else if (humanChoice === "scissors" && computerChoice === "paper") {
//     console.log("You Win! scissors beats paper");
//     return "human";
//   } else if (humanChoice === "rock" && computerChoice === "scissors") {
//     console.log("You Win! rock beats scissors");
//     return "human";
//   } else if (humanChoice === computerChoice) {
//     console.log(`it is a Tie, play again`);
//     return "tie";
//   }
// };

// // const humanSelection = getHumanChoice(promptFromUser);
// // console.log(humanSelection,"human selec")
// // const computerSelection = getComputerChoice(randNum);
// // console.log(computerSelection,"comp selec")


// // //--------------------
// //   let result = playRound(
// //     getHumanChoice(prompt("Enter your choice").toLowerCase()),
// //     getComputerChoice(Math.trunc(Math.random() * 3 + 1))
// //   );
// //   console.log(result, "result");
// //   if (result === "computer") {
// //     computerScore++;
// //   } else if (result === "human") {
// //     humanScore++;
// //   }

// //   //-----------------
// //   result = playRound(
// //     getHumanChoice(prompt("Enter your choice").toLowerCase()),
// //     getComputerChoice(Math.trunc(Math.random() * 3 + 1))
// //   );
// //   console.log(result, "result");
// //   if (result === "computer") {
// //     computerScore++;
// //   } else if (result === "human") {
// //     humanScore++;
// //   }
// //   //---------------
// //   result = playRound(
// //     getHumanChoice(prompt("Enter your choice").toLowerCase()),
// //     getComputerChoice(Math.trunc(Math.random() * 3 + 1))
// //   );
// //   console.log(result, "result");
// //   if (result === "computer") {
// //     computerScore++;
// //   } else if (result === "human") {
// //     humanScore++;
// //   }
// //   //------------------------
// //   result = playRound(
// //     getHumanChoice(prompt("Enter your choice").toLowerCase()),
// //     getComputerChoice(Math.trunc(Math.random() * 3 + 1))
// //   );
// //   console.log(result, "result");
// //   if (result === "computer") {
// //     computerScore++;
// //   } else if (result === "human") {
// //     humanScore++;
// //   }
// //   //--------------
// //   result = playRound(
// //     getHumanChoice(prompt("Enter your choice").toLowerCase()),
// //     getComputerChoice(Math.trunc(Math.random() * 3 + 1))
// //   );
// //   console.log(result, "result");
// //   if (result === "computer") {
// //     computerScore++;
// //   } else if (result === "human") {
// //     humanScore++;
// //   }
//   console.log(computerScore, humanScore, "scores");


// playGame();
