// Update the variable `sortedLetters`.
// It should contain the values of `letters` and `letters2` in ascending order

var letters = ["a", "n", "c", "e", "z", "f"];
var letters2 = ["w", "b", "v", "g", "l", "o"];
var addLetters = letters.concat(letters2);
var sortedLetters = addLetters.sort();
console.log(sortedLetters);

/* 
  EXPECTED RESULT
  ---------------
  [ 'a', 'b', 'c', 'e', 'f', 'g', 'l','n', 'o', 'v', 'w', 'z' ]
*/
