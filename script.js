// Genera un número aleatorio entre 1 y 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guessInput = document.getElementById('guess');
    const resultDiv = document.getElementById('result');
    const guess = parseInt(guessInput.value, 10);
    attempts++;

    if (isNaN(guess) || guess < 1 || guess > 100) {
        resultDiv.textContent = 'Por favor, introduce un número válido entre 1 y 100.';
        return;
    }

    if (guess === randomNumber) {
        resultDiv.textContent = `¡Felicidades! Adivinaste el número en ${attempts} intentos.`;
        guessInput.disabled = true;
    } else if (guess < randomNumber) {
        resultDiv.textContent = 'Intenta con un número más alto.';
    } else {
        resultDiv.textContent = 'Intenta con un número más bajo.';
    }
}
