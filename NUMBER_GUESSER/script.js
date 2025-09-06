let random= parseInt( Math.random()*100+1);
// const guessSlot = parseInt(document.getElementById('guess'))
const submit_guess = document.getElementById('subt');
const user_input = document.getElementById('guessField');
const prev_guess = document.querySelector('.guesses');
const remaining_guess = document.querySelector('.lastResult');
const lowORhi = document.querySelector('.lowOrHi');

let p= document.createElement('p');
 let  prev_gu = [];
 let numGuess = 1;
 let playGame= true ;
 if(playGame){
    submit_guess.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(user_input.value);
        console.log(guess);
        valid_guess(guess);

    })
 }
 function valid_guess(guess){
    if (isNaN(guess)) {
        alert('give a valid interger in guess')
        
    }
    else if (guess<1) {
        alert('enetr the nu. more than 1 ');
    }
    else if (guess>100) {
        alert('enter the no less than 100 ');
    }
    else{
    prev_gu.push(guess);
    if(numGuess===11){
        displayGuess(guess);
        displayMessage(`game is over and right guess was ${random}`);

        endGame();
    }
    else{
        displayGuess(guess);
        checkguess(guess);
    }
}
 
 }
 function checkguess(guess){
    if (guess===random) {
        displayMessage(`CONGRATULLATIONS !! your guess was right`);
        endGame();
        
    }
    else if(guess<random) {
            displayMessage(`your guess was too low`)
        }
    else if(guess>random) {
            displayMessage(`your guess was too high`)
        }
    }
 
  function displayGuess(guess){
    user_input.value ='';
    prev_guess.innerHTML += `${guess}`;
    numGuess++;
    remaining_guess=`${11-numGuess}`;


  }
  function displayMessage(message) {
  lowORhi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  user_input.value = '';
  user_input.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    random = parseInt(Math.random() * 100 + 1);
    prev_gu = [];
    numGuess = 1;
    prev_guess.innerHTML = '';
    remaining_guess.innerHTML = `${11 - numGuess} `;
    user_input.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}



