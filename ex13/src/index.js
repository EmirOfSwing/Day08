// Only change code below this line
function randomRangeNumber(minNumber, maxNumber) {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}
console.log(randomRangeNumber(2, 7));
// Only change code above this line
module.exports = randomRangeNumber;
