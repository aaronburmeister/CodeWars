// https://www.codewars.com/kata/51e04f6b544cf3f6550000c1/javascript

// Returns number of complete beeramid levels
var beeramid = function(bonus, price) {
    // calculate the number of beers you can buy - min 0
    const numberOfBeers = bonus >= 0 ? Math.floor(bonus/price) : 0
    
    // while loop adds square until it's bigger than numberOfBeers
    let i = 1;
    let sum = 0;
    while (sum <= numberOfBeers) {
      sum += i**2
      i++
    }
    return i-2
}

// May 27, 2020