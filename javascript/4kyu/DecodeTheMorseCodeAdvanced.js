// https://www.codewars.com/kata/54b72c16cd7f5154e9000457

var decodeBits = function(bits){
    // ToDo: Accept 0's and 1's, return dots, dashes and spaces
    // remove leading and ending zeroes
    bits = bits.replace(/^0+/g, '').replace(/0+$/g, '')
    
    function findShortestLength(array) {
      let shortestGuy = 999999;
      let estimate = 1;
      if (array.length == 1) return 1
      for (let i=1; i < array.length; i++) {
        if (array[i] == array[i-1]) {
          estimate++
        } else {
          if (estimate < shortestGuy) shortestGuy = estimate
          estimate = 1
        }
      }
      return shortestGuy == 999999 ? estimate : shortestGuy
    }
    let rate = findShortestLength(bits.split(''))
    let ones = '', zeroes = ''
    for (let i=0; i < rate*3; i++) {
      ones += '1'
      zeroes += '0'
    }
    let dashThreshold = new RegExp(ones, 'g')
    let wordSpaceThreshold = new RegExp(zeroes, 'g')
    
    return bits.replace(dashThreshold, '-')
               .replace(wordSpaceThreshold, '  ')
               .replace(/1+/g, '.')
               .replace(/0+/g, ' ')
}

var decodeMorse = function(morseCode){
    // ToDo: Accept dots, dashes and spaces, return human-readable message
    return morseCode.split('  ')
                    .map( word => word == '' ? ' ' : MORSE_CODE[word.replace(/ /g, '')])
                    .join('')
}

// June 5, 2020