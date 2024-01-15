'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!!!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

/*Here we add some action when the button titled 'check' is clicked. In our index, we have two buttons,
'again' and 'check'. We have assigned the button type='btn *****' to them. The btn is  a more generic class,
so in order to select the respective button, we go as follows.
*/

// document.querySelector('.check').addEventListener('click', function () {
//   console.log(document.querySelector('.guess').value);
// });

/*In the code lines above, we have written the function, but haven't called it anywhere.
But the JAvascript engine itself takes the function given as the argument and 
calls it at the mentioned 'click' event. This was just the demo code to explain the 
working of the function. The actual code is below*/

//Implementing the game logic
/**The logic of the game is as follwos
 * Player enters a number
 * If that number is lesser/greater than the number decided, the message is diplayed
 * This is repeated until the correct number is guessed.
 * With each uncorrect guess, the preset score of 20 reduces.
 * Once the guess is correct, the score at which it was correctly guessed is recorded as highscore
 * When 'Again' button is hit, the score is reset to 20, while the highscore remians the same
 */

const number = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = number;
/**Math.random(): gives a random number between 0 and 1. To give it a range 
between 0 and 20, we can multiply the resulting number by 20 
*Math.trunc(): it removes the numbers after the decimal point and returns a 
natural number to which we add 1 so that we can cover the entire range from 1 to 20*/

let score = 20; //This is a state variable which holds the value and we store
//in the code and do not rely only on the DOM

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(typeof guess);   //To check the type of guess input
  console.log(guess); //This input we received is a string. But we want a number. So wrap the above code

  /*Below is the logic tp check whether the number entered in higher/lower/equal to
  the random generated number */

  //If no guess is made
  if (!guess) document.querySelector('.message').textContent = 'No number!';
  //When the guess is lesser
  else if (guess < number) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Try Higher!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'YOU LOSE!!';
    }
    //When the guess is higher
  } else if (guess > number) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Try Lower!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'YOU LOST!!';
    }
  } else if (guess === number)
    document.querySelector('.message').textContent = 'Correct!!!!!';
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';
});
