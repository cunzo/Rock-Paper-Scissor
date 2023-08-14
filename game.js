const choice = ['ROCK','PAPER','SCISSOR'];

function getComputerChoice() {
    const randomizer = (min, max) => { return Math.round(Math.random() * (max - min) + min) };
    const cpuChoice = choice[randomizer(0,2)];
    console.log(`Computer choice: ${cpuChoice}`);
    return cpuChoice;
}

function getUserChoice() {
    const userChoice = prompt('Hi make your choice (Rock - Paper - Scissor): ','paper');
    console.log(`User choice: ${userChoice}`);
    return userChoice;
}

function play() {
    let winCount = 0;
    let loseCount = 0;
    let drawCount = 0;

    for (let i = 0; i < 5; i++) {
        const userChoice = getUserChoice().toUpperCase();
        const cpuChoice = getComputerChoice().toUpperCase();
        if (!choice.includes(userChoice)) {
            throw new Error('Invalid user choice');
        } else if (userChoice == cpuChoice) {
            drawCount += 1;
            console.log(`You Draw!`);
        } else if (
            (userChoice == 'ROCK' && cpuChoice == 'SCISSOR') || 
            (userChoice == 'PAPER' && cpuChoice == 'ROCK') || 
            (userChoice == 'SCISSOR' && cpuChoice == 'PAPER')
        ) { 
            console.log(`You Win!`); 
            winCount += 1;
        } else {
            console.log(`You Lose!`);
            loseCount += 1;
        }
    }

    console.log(`Win count: ${winCount}`);
    console.log(`Lose count: ${loseCount}`);
    console.log(`Draw count: ${drawCount}`);

}