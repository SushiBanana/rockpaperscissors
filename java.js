let computerScore = 0;
let yourScore = 0;


function getComputerChoice () {
    let rdnNo = Math.floor(Math.random() *3) + 1;
    if (rdnNo == 1) {
        console.log("The computer chose rock!");
    } else if (rdnNo == 2) {
        console.log("The computer chose paper!");
    } else if (rdnNo == 3) {
        console.log("The computer chose scissors!");
    }
    return rdnNo;
}

function playerSelection () {
    if (choice == "ROCK") {
        console.log("You chose rock");
    } else if (choice =="PAPER") {
        console.log("You chose paper");
    } else if (choice == "SCISSORS")
        console.log("You chose scissors");
    return choice;
}

function playRound() {
    if (rdnNo == 1 && choice == "ROCK") {
        console.log("It's a tie!! We both chose rock");
        counter = 2;
    } else if (rdnNo == 2 && choice == "PAPER") {
        console.log("It's a tie!! We both chose paper");
        counter = 2;
    } else if (rdnNo == 3 && choice == "SCISSORS") {
        console.log("It's a tie!! We both chose scissors");
        counter = 2;
    } else if (rdnNo == 1 && choice == "PAPER") {
        console.log("You won!! Paper beats rock");
        counter = 1;
    } else if (rdnNo == 2 && choice == "ROCK") {
        console.log("You lost!! Paper beats rock");
        counter = 0;
        
    } else if (rdnNo == 1 && choice == "SCISSORS") {
        console.log("You lost!! Rock beats scissors");
        counter = 0;
        
    } else if (rdnNo == 3 && choice == "ROCK") {
        console.log("You won!! Rock beats scissors");
        counter = 1;
        
    } else if (rdnNo == 2 && choice == "SCISSORS") {
        console.log("You won!! Scissors beats paper");
        counter = 1;
        
    } else if (rdnNo == 3 && choice == "PAPER") {
        console.log("You lost!! Scissors beats paper");
        counter = 0;
    }
    return counter;

}

function game() {
    playRound()
    if (counter == 1) {
        console.log("Round won: You")
    } else if (counter == 0) {
        console.log("Round won: Computer")
    } else if (counter == 2) {
        console.log("Nobody won")
    }
    return counter
}

function roundScore() {
    if (counter == 1) {
        yourScore += 1
    } else if (counter == 0) {
        computerScore += 1 
    } else if (counter == 2) {
        
    }
    console.log(`Computer score: ${computerScore} Your score: ${yourScore}`)
}

function winner() {
    if (computerScore > yourScore) {
        console.log("BOOOO u lost!")
    } else if (yourScore > computerScore) {
        console.log("Wow you won! You're pretty good")
    } else {
        console.log("It's a tie!!")
    }
}

for (let i = 0; i < 5; i++) {
    choice = prompt("Choose rock, paper, or scissors?");
    choice = choice.toUpperCase();
    playerSelection();
    rdnNo = getComputerChoice();
    game();
    roundScore();
  }
winner()