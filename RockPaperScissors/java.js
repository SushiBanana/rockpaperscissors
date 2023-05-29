const gameLine1 = document.querySelector(".game-line1")
const gameLine2 = document.querySelector(".game-line2")
const gameLine3 = document.querySelector(".game-line3")


const rockBtn = document.querySelector(".rock-btn")
const paperBtn = document.querySelector(".paper-btn")
const scissorsBtn = document.querySelector(".scissors-btn")
const rulesBtn = document.querySelector(".rules")
const modal = document.querySelector(".modal")
const closeBtn = document.querySelector(".close-button")
const scoringModal = document.querySelector(".scoring")
const winnerFinder = document.querySelector(".winner-finder")
const tryAgain = document.querySelector(".try-again")


let computerScore = document.querySelector(".computer-score")
let yourScore = document.querySelector(".your-score")


let compScore = 0;
let yrScore = 0;
let choice = "";
let rdnNo = "";

rulesBtn.addEventListener("click", () => {
    modal.showModal()
})

closeBtn.addEventListener("click", () => {
    modal.close()
})

function getComputerChoice () {
    rdnNo = Math.floor(Math.random() *3) + 1;
    if (rdnNo == 1) {
        gameLine2.textContent = "The computer chose rock!";
        gameLine2.append();
        playRound();
        
    } else if (rdnNo == 2) {
        gameLine2.textContent = "The computer chose paper!";
        gameLine2.append();
        playRound();

    } else if (rdnNo == 3) {
        gameLine2.textContent = "The computer chose scissors!";
        gameLine2.append();
        playRound();

    }

}

rockBtn.addEventListener("click", function () {
    choice = "rock";
    gameLine1.style.fontSize = '20px';
    gameLine1.textContent = "You chose rock!";
    gameLine1.append();
    getComputerChoice();

})

paperBtn.addEventListener("click", function () {
    choice = "paper";
    gameLine1.style.fontSize = '20px';
    gameLine1.textContent = "You chose paper!"
    gameLine1.append();
    getComputerChoice();

})

scissorsBtn.addEventListener("click", function () {
    choice = "scissors";
    gameLine1.style.fontSize = '20px';
    gameLine1.textContent = "You chose scissors!"
    gameLine1.append();
    getComputerChoice();

})

function playRound() {
    if (rdnNo == 1 && choice == "rock") {
        gameLine3.textContent = "It's a tie!! We both chose rock";
        gameLine3.append()
        counter = 2;
        updateScore()
    
    } else if (rdnNo == 2 && choice == "paper") {
        gameLine3.textContent = "It's a tie!! We both chose paper";
        gameLine3.append()
        counter = 2;
        updateScore()


    } else if (rdnNo == 3 && choice == "scissors") {
        gameLine3.textContent = "It's a tie!! We both chose scissors";
        gameLine3.append()
        counter = 2;
        updateScore()


    } else if (rdnNo == 1 && choice == "paper") {
        gameLine3.textContent = "You won!! Paper beats rock";
        gameLine3.append()
        counter = 1;
        updateScore()


    } else if (rdnNo == 2 && choice == "rock") {
        gameLine3.textContent = "You lost!! Paper beats rock";
        gameLine3.append()
        counter = 0;
        updateScore()

        
    } else if (rdnNo == 1 && choice == "scissors") {
        gameLine3.textContent = "You lost!! Rock beats scissors";
        gameLine3.append()
        counter = 0;
        updateScore()

        
    } else if (rdnNo == 3 && choice == "rock") {
        gameLine3.textContent = "You won!! Rock beats scissors";
        gameLine3.append()
        counter = 1;
        updateScore()

        
    } else if (rdnNo == 2 && choice == "scissors") {
        gameLine3.textContent = "You won!! Scissors beats paper";
        gameLine3.append()
        counter = 1;
        updateScore()

        
    } else if (rdnNo == 3 && choice == "paper") {
        gameLine3.textContent = "You lost!! Scissors beats paper";
        gameLine3.append()
        counter = 0;
        updateScore()

    }
    return counter;

}

function pickChoice() {
    gameLine1.textContent = "Pick your meowpen";
    gameLine1.style.fontSize = '40px';
}

function updateScore() {
    if (counter == 2) {
        computerScore.textContent = `Computer: ${compScore}`;
        computerScore.append();
        yourScore.textContent = `You: ${yrScore}`;
        yourScore.append();
        if (compScore == 5 || yrScore == 5) checkWinner();

    } else if (counter == 1) {
        yrScore++;
        computerScore.textContent = `Computer: ${compScore}`;
        computerScore.append();
        yourScore.textContent = `You: ${yrScore}`;
        yourScore.append();
        if (compScore == 5 || yrScore == 5) checkWinner();

    } else if (counter == 0) {
        compScore++;
        computerScore.textContent = `Computer: ${compScore}`;
        computerScore.append();
        yourScore.textContent = `You: ${yrScore}`;
        yourScore.append();
        if (compScore == 5 || yrScore == 5) checkWinner();
    }
}

tryAgain.addEventListener("click", () => {
    document.location.reload();
})

function checkWinner() {
    if (compScore > yrScore) {
        winnerFinder.textContent = "Oh no! You lost";
        scoringModal.showModal();

    } else if (yrScore > compScore) {
        winnerFinder.textContent = "Hooray! You won";
        scoringModal.showModal();
        
    }
}

pickChoice() 

