// https://www.codewars.com/kata/526571aae218b8ee490006f4

var countBits = function(n) {
    // Initialize Count
    let count = 0;
    // toString(2) turns a number into a binary string
    // .split("") turns that string into an array of characters
    (n).toString(2).split("").forEach( digit => {
      // for each number we test if it is equal to 1
      // if true, we increment the count, otherwise we do nothing
      digit == 1 ? count += 1 : 0;
    })
    // return the number of ones in the string
    return count;
};

// March 2020