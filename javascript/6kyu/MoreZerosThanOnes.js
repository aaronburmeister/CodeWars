// https://www.codewars.com/kata/5d41e16d8bad42002208fe1a

function moreZeros(s){
    const characterArray = s.split("")
    const binaries = characterArray.map( letter => letter.charCodeAt(0).toString(2) )
    
    const hasMoreZeroes = (n) => {
      let zeroes = 0;
      for (let i=0; i < n.length; i++) {
        if (n[i] == 0) zeroes++;
      }
      return zeroes > (n.length/2)
    }
    
    const returnValues = binaries.map( number => hasMoreZeroes(number))
    
    let answerArray = [];
    for (let i=0; i<returnValues.length; i++) {
      if (returnValues[i] && !answerArray.includes(characterArray[i])) answerArray.push(characterArray[i])
    }
    
    return answerArray;
}

// May 2020