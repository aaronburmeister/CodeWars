// https://www.codewars.com/kata/573992c724fc289553000e95

function smallest(n) {
    console.log("original = ", n)
    let digits = `${n}`
    digits = digits.split("").map(i => Number(i))
    let optimal = [...digits].sort()
    // console.log("optimal = ", optimal.join(""))
    let answerArray = []
    for (let digit = 0; digit < digits.length; digit++) {
      // find smallest number
      if (digits[digit] != optimal[digit]) {
      
        // find the lowest number you can make by moving 1 number
        let indices = []
        
        // find the indexes of all the lowest numbers
        digits.forEach((number, index) => {
          if (number === optimal[digit]) {
            indices.push(index)
          }
        })
        
        // the lowest number
        let optimalDigit = digits[indices[0]]
        
        // test for all the lowest numbers you can make by moving one digit
        for (let t = 0; t < indices.length; t++) {
          for (let m = 0; m < digits.length; m++) {
          
            // remove the index
            let test = [...digits]
            test.splice(indices[t], 1)
            
            // test for each permutation
            test.splice(m, 0, optimalDigit)
            answerArray.push([Number(test.join("")), indices[t], m])        
          }
        }
      }
    }
    // find the lowest value you can make
    let lowestValue = Math.min(...answerArray.map(array => array[0]))
    
    // if the number can't be rearranged lower (i.e. they are all the same number or in order already)
    if (lowestValue > n) {
      return [n, 0, 0]
    }
    
    // now find the lowest i value, followed by the lowest j value
    let iValues = [...answerArray].filter(array => array[0] === lowestValue).map(array => array[1])
    let jValues = [...answerArray].filter(array => array[0] === lowestValue).map(array => array[2])
    
    // if there are multiple values, sort by lowest i value
    if (iValues.length > 1) {
      let findLowestI = 1e30, findLowestJ = 1e30;
      for (let g = 0; g < iValues.length; g++) {
        if (iValues[g] < findLowestI) {
          findLowestI = iValues[g]
          findLowestJ = jValues[g]
        }
      }
      return [lowestValue, findLowestI, findLowestJ]
    }
    
    // otherwise just return the single values
    return [lowestValue, ...iValues, ...jValues]
}

// Late April 2020