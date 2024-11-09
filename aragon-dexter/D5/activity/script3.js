// WELVOME THE PLAYER
console.log('------------Welcome Player------------');
// generate random number
const secretNumber = Math.floor(Math.random() * 10) + 1;
var attempts=0;
do {
    attempts++;
    let guessedNumber = prompt('Guess The Secret Number');
    if (guessedNumber < secretNumber) {
        console.log('Too low! Try again.');
    }
    else if (guessedNumber > secretNumber) {
        console.log('Too high! Try again.');
    }
    else {
        console.log('Congratulations! You guessed the correct number:',secretNumber);
        console.log(`It took you ${attempts} attempts.`);
        break;
    }
}while(true);