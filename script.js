let randomNumber =  Math.floor(Math.random() * 100) +1;
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector("lowOrHi");

const guessSubmit = document.querySelector("guessSubmit");
const guessField = document.querySelector("gussField");

let guessCoubt = 1;
let resetButtom;

function checkGuess() {
    let userGuess = Number(guessField.value);
    
    if (userGuess === randomNumber) {
        lastResult.textContent = "Felicidades lo adivinaste";
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent = "";

    } else if (guessCount === 10) {
        lastResult.textContent = "Perdio El Juego";
        
    } else {
        lastResult.textContent = "No es, elije otro ;)";
        lastResult.style.backgroundColor = "red";
         if (userGuess < randomNumber) {
            lowOrHi.textContent = "Un poco más";
        } else {
            lowOrHi.textContent = "Un poco menos";
        }
    }

    guessCoubt ++;
    guessField.value ="";
    guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
    guessField.desabled= true;
    guessSubmit.desabled = true;
    resetButtom = document.createElement ("button");
    resetButtom.textContent = "star new game";
    document.body.append(resetButtom);
    resetButtom-addEventListener("click", resetButtom);
}
function resetGame() {
    guessCount = 1;
    
    const resetParas = document.querySelectorAll (".resultParas p");
    for(let i = 0; i < resetParas.length; i ++) {
        resetParas[i].textContent ="";
    }
   
    resetButtom.parentNode.removeChild(resetButtom);

    guessField.desabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    lastResult.style.backgroundColor = "white";

    randomNumber = Math.floor(Math.random() * 100) + 1;
}
