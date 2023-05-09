function getComputerChoice () {
    let rdnNo = Math.floor(Math.random() *3) + 1;
    if (rdnNo == 1) {
        console.log("The computer chose rock!")
    } else if (rdnNo == 2) {
        console.log("The computer chose paper!")
    } else {
        console.log("The computer chose scissors!")
    }
}

let playerSelection = prompt("Do you wanna play rock, paper or scissors?")
