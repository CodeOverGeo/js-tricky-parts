function guessingGame() {
  let won = false;
  let count = 0;
  let winningNumber = Math.floor(Math.random() * 100);
  return function numGame(num) {
    if (won == true) {
      return `The game is over, you already won!`;
    }
    count++;
    if (num == winningNumber) {
      won = true;
      return `You win! You found ${winningNumber} in ${count} guesses.`;
    } else if (num > winningNumber) {
      return `${num} is too high!`;
    } else {
      return `${num} is too low!`;
    }
  };
}

module.exports = { guessingGame };
