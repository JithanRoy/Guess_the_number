'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);

var score = 20;
let HighScore = 0;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '➖ No Number!';

    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';

    if(score > HighScore){
      HighScore = score;
      document.querySelector('.highscore').textContent = HighScore;
    }

    // when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }

    //when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }


});

document.querySelector('.again').addEventListener('click', () => {
  
      score = 20;
      let secretNumber = Math.trunc(Math.random() * 20) + 1;

      document.querySelector('.number').value = secretNumber; 
      document.querySelector('.message').textContent = 'Start guessing...';
      // displayMessage('Start guessing...');
      document.querySelector('.score').textContent = score;
      document.querySelector('.number').textContent = '?';
      document.querySelector('.guess').value = '';

      document.querySelector('body').style.backgroundColor = '#222';
      document.querySelector('.number').style.width = '15rem';

});
