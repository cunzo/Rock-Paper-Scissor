let winCount = 0;
let loseCount = 0; 
let drawCount = 0;
let totMatch = 0;
const choice = ['ROCK','PAPER','SCISSOR'];
const choiceRock = document.querySelector('#choiceRock');
const choicePaper = document.querySelector('#choicePaper');
const choiceScissor = document.querySelector('#choiceScissor');

const result = document.querySelector('#result');
const winCountEl = document.querySelector('#winCount');
const loseCountEl = document.querySelector('#loseCount');
const drawCountEl = document.querySelector('#drawCount');
const totMatchEl = document.querySelector('#totMatch');

choiceRock.addEventListener('click',play);
choicePaper.addEventListener('click',play);
choiceScissor.addEventListener('click',play);

function getComputerChoice() {
    const randomizer = (min, max) => { return Math.round(Math.random() * (max - min) + min) };
    const cpuChoice = choice[randomizer(0,2)];
    console.log(`Computer choice: ${cpuChoice}`);
    return cpuChoice;
}

function play() {
    totMatch += 1;
    const userChoice = this.value.toUpperCase();
    const cpuChoice = getComputerChoice().toUpperCase();
    if (userChoice == cpuChoice) {
        drawCount += 1;
        result.textContent = `You Draw!`;
    } else if (
        (userChoice == 'ROCK' && cpuChoice == 'SCISSOR') || 
        (userChoice == 'PAPER' && cpuChoice == 'ROCK') || 
        (userChoice == 'SCISSOR' && cpuChoice == 'PAPER')
    ) { 
        result.textContent = `You Win!`;
        winCount += 1;
    } else {
        result.textContent = `You Lose!`;
        loseCount += 1;
    }

    if (winCount == 5) {
        result.textContent = `YOU WIN THE GAME!`;
        winCount = 0;
        loseCount = 0;
        drawCount = 0;
        totMatch = 0;
    } else if (loseCount == 5) {
        result.textContent = `YOU LOSE THE GAME!`;
        winCount = 0;
        loseCount = 0;
        drawCount = 0;
        totMatch = 0;
    }
    
    winCountEl.textContent = `W:${winCount}`;
    loseCountEl.textContent = `L:${loseCount}`;
    drawCountEl.textContent = `D:${drawCount}`;
    totMatchEl.textContent = `All match:${totMatch}`;
}