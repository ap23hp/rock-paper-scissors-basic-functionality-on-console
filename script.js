//let randNum = Math.trunc(Math.random() * 3 + 1);
function getComputerChoice(rand) {
  console.log(rand, "comp-choice");
  if (rand === 1) {
    return "rock";
  } else if (rand === 2) {
    return "paper";
  } else if (rand === 3) {
    return "scissors";
  }
}
//getComputerChoice(Math.trunc(Math.random() * 3 + 1));

//let promptFromUser = prompt("Enter your choice").toLowerCase();
getHumanChoice = function (choice) {
  console.log(choice, "human-choice");
  return choice;
};
//getHumanChoice(prompt("Enter your choice").toLowerCase());

const playRound = function (humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You Lose! Paper beats Rock");
    return "computer";
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You Lose! rock beats scissors");
    return "computer";
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You Lose! scissors beats paper");
    return "computer";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You Win! paper beats rock");
    return "human";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You Win! scissors beats paper");
    return "human";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You Win! rock beats scissors");
    return "human";
  } else if (humanChoice === computerChoice) {
    console.log(`it is a Tie, play again`);
    return "tie";
  }
};

// const humanSelection = getHumanChoice(promptFromUser);
// console.log(humanSelection,"human selec")
// const computerSelection = getComputerChoice(randNum);
// console.log(computerSelection,"comp selec")

const playGame = function () {
  let humanScore = 0;
  let computerScore = 0;
for (i=0;i<5;i++){
    let result = playRound(
    getHumanChoice(prompt("Enter your choice").toLowerCase()),
    getComputerChoice(Math.trunc(Math.random() * 3 + 1))
  );
  console.log(result, "result");
  if (result === "computer") {
    computerScore++;
  } else if (result === "human") {
    humanScore++;
  }
}
// //--------------------
//   let result = playRound(
//     getHumanChoice(prompt("Enter your choice").toLowerCase()),
//     getComputerChoice(Math.trunc(Math.random() * 3 + 1))
//   );
//   console.log(result, "result");
//   if (result === "computer") {
//     computerScore++;
//   } else if (result === "human") {
//     humanScore++;
//   }

//   //-----------------
//   result = playRound(
//     getHumanChoice(prompt("Enter your choice").toLowerCase()),
//     getComputerChoice(Math.trunc(Math.random() * 3 + 1))
//   );
//   console.log(result, "result");
//   if (result === "computer") {
//     computerScore++;
//   } else if (result === "human") {
//     humanScore++;
//   }
//   //---------------
//   result = playRound(
//     getHumanChoice(prompt("Enter your choice").toLowerCase()),
//     getComputerChoice(Math.trunc(Math.random() * 3 + 1))
//   );
//   console.log(result, "result");
//   if (result === "computer") {
//     computerScore++;
//   } else if (result === "human") {
//     humanScore++;
//   }
//   //------------------------
//   result = playRound(
//     getHumanChoice(prompt("Enter your choice").toLowerCase()),
//     getComputerChoice(Math.trunc(Math.random() * 3 + 1))
//   );
//   console.log(result, "result");
//   if (result === "computer") {
//     computerScore++;
//   } else if (result === "human") {
//     humanScore++;
//   }
//   //--------------
//   result = playRound(
//     getHumanChoice(prompt("Enter your choice").toLowerCase()),
//     getComputerChoice(Math.trunc(Math.random() * 3 + 1))
//   );
//   console.log(result, "result");
//   if (result === "computer") {
//     computerScore++;
//   } else if (result === "human") {
//     humanScore++;
//   }
  console.log(computerScore, humanScore, "scores");
  
};
playGame();
