let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;
let previousGuesses = [];

function checkGuess() {
    const userGuess = Number(document.getElementById('guessInput').value);
    let feedback = '';

    if (previousGuesses.includes(userGuess)) {
        feedback = 'You already guessed that number!';
    } else {
        previousGuesses.push(userGuess);
        attempts--;

        if (userGuess === randomNumber) {
            feedback = 'Congratulations! You guessed the right number!';
            attempts = 0;
        } else if (attempts === 0) {
            feedback = `Game over! The correct number was ${randomNumber}.`;
        } else {
            if (userGuess < randomNumber) {
                feedback = 'Too low!';
            } else if (userGuess > randomNumber) {
                feedback = 'Too high!';
            }
        }
    }

    document.getElementById('feedback').textContent = feedback;
    document.getElementById('previousGuesses').textContent = `Previous Guesses: ${previousGuesses.join(', ')}`;
    document.getElementById('guessesRemaining').textContent = `Guesses Remaining: ${attempts}`;

    if (attempts === 0) {
        document.getElementById('submitBtn').disabled = true;
    }

    document.getElementById('guessInput').value = '';
}
