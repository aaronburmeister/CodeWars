// https://www.codewars.com/kata/54b724efac3d5402db00065e

decodeMorse = function(morseCode){
    //your code here
    return morseCode.trim().split('   ').map( word => {
      return word.split(' ').map( letter => {
        return MORSE_CODE[letter]
      }).join('')
    }).join(' ')
}

// May 2020