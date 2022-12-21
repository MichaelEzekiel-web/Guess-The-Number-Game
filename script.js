'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number🥳 You WINNN🥇';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;


// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

//SECRET NUMBER

const secretNumber = Math.trunc(Math.random()*20) + 1;

let score = 20;

let highscore = 0;
document.querySelector('.check').addEventListener('click', function() {
    // Function to specify what happens when the button is clicked

    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess);

    // Instances ;
    // When it's equal to the secret number
    // When it's lower than the secret number
    // When it's higher to the secret number

    if(!guess) { 
        document.querySelector('.message').textContent = '🚫 No     number input';
    } else if (guess === secretNumber) {
        // Instance 1(When player wins)
       document.querySelector('.message').textContent = 'Correct Number🥳 You WINNN🥇'; 

       document.querySelector('.number').textContent = secretNumber;

       document.querySelector('body').style.background = '#60b347';
       document.querySelector('.number').style.width = '30rem';

       if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
       }

    } else if (guess > secretNumber) {
        // Instance 2

        if(score > 0) {
            document.querySelector('.message').textContent = '📉 Too high !'; 
            score = score - 1;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You LOST!'; 
        }

    } else if (guess < secretNumber) {
        // Instance 3

        if(score > 0) {
            document.querySelector('.message').textContent = '📈 Too low !'; 
            score = score - 1;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You LOST!'; 
        }
    }

});

// Implement the reset functionality

document.querySelector('.again').addEventListener('click', function() {
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = '20';
    // use score variable instead of 20

    document.querySelector('body').style.background = '#222';

    document.querySelector('.number').textContent = '?'

        // Instead of this i can reassign the secretNumber (But fuck it , it works🕺🏿)

    document.querySelector('.guess').value = '';
})