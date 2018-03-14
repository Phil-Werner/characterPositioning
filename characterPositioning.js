function countLetters(inputString) {

  var shortString = removeSpaces(inputString); // creates a new string equal to the
                                              //  inputString but removes the spaces.

  var letterObj = {}  //creates the object that will be returned

  for (var i = 0; i < shortString.length; i++) {


// The if statement checks if the key exists.  It will return true if it exists, so we
// check that it's not true that it exists with the ! operator.

      if (!letterObj[shortString[i]]) {

// And if the key doesn't exist we create the key and set it equal to an array with one
//value, which we set to i.  This will be the first index of each letter in the inputString


        letterObj[shortString[i]] = [i];
      }

// If the key already exists then we do the else statement, which will push the index
// of the next occurence of the letter into the array which must already exist.

      else {
        letterObj[shortString[i]].push(i);
      }
  }

// And finally we return the entire letterObj.

  return letterObj;
}

function removeSpaces(input) {
  var output = "";

  for (var i = 0; i < input.length; i++) {

    if (input[i] !== " ") output = output + input[i];
  }

  return output;
}

console.log(countLetters("Lighthouse in the house"));