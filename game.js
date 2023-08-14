const choice = ['ROCK','PAPER','SCISSOR'];

function getComputerChoice() {
    const choice = ['Rock','Paper','Scissor'];
    const randomizer = (min, max) => { return Math.round(Math.random() * (max - min) + min) };
    const cpuChoice = choice[randomizer(0,2)];
    console.log(`Computer choice: ${cpuChoice}`);
    return cpuChoice;
}

function getUserChoice() {
    const userChoice = prompt('Hi make your choice (Rock - Paper - Scissor): ','Rock');
    console.log(`User choice: ${userChoice}`);
    return userChoice;
}

function play() {
    const userChoice = getUserChoice().toUpperCase();
    const cpuChoice = getComputerChoice().toUpperCase();

    if (!choice.includes(userChoice)) {
        throw new Error('Invalid user choice');
    } else if (userChoice == cpuChoice) {
        console.log(`You Draw!`);
    } else if (
        (userChoice == 'Rock' && cpuChoice == 'Scissor') || 
        (userChoice == 'Paper' && cpuChoice == 'Rock') || 
        (userChoice == 'Scissor' && cpuChoice == 'Paper')
    ) { 
        console.log(`You Win!`); 
    } else {
        console.log(`You Lose!`);
    }
}

play();