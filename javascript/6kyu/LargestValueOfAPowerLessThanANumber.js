// https://www.codewars.com/kata/5e860c16c7826f002dc60ebb

function largestPower(n){
    if (n === 1) {
      return [0, -1];
    } else if (n <= 4) {
      return [1, -1];
    } else if (n <= 1000000) {
      let pairs = []
      for (let i=2; i < n ; i++) {
        let num = Math.floor(Math.log(n) / Math.log(i))
        if (i**num < n && num !== 1 ) {
          pairs.push(i**num)
        }
        if (num === 1) {
          i++
        }
      }
      const topValue = Math.max(...pairs)
      pairs = pairs.filter(pair => pair === topValue)
      return [topValue, pairs.length]
    }
}

// April 2020