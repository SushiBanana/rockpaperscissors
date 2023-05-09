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

function round() {
    if (rdnNo == 1 && choice == "ROCK") {
        console.log("It's a tie!! We both chose rock");
    } else if (rdnNo == 2 && choice == "PAPER") {
        console.log("It's a tie!! We both chose paper");
    } else if (rdnNo == 3 && choice == "SCISSORS") {
        console.log("It's a tie!! We both chose scissors");
    } else if (rdnNo == 1 && choice == "PAPER") {
        console.log("You won!! Paper beats rock");
    } else if (rdnNo == 2 && choice == "ROCK") {
        console.log("You lost!! Paper beats rock");
    } else if (rdnNo == 1 && choice == "SCISSORS") {
        console.log("You lost!! Rock beats scissors");
    } else if (rdnNo == 3 && choice == "ROCK") {
        console.log("You won!! Rock beats scissors");
    } else if (rdnNo == 2 && choice == "SCISSORS") {
        console.log("You won!! Scissors beats paper");
    } else if (rdnNo == 3 && choice == "PAPER") {
        console.log("You lost!! Scissors beats paper");
    }

}

let choice = prompt("Choose rock, paper or scissors?");
choice = choice.toUpperCase();
playerSelection();
let rdnNo = getComputerChoice();
round();