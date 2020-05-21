// https://www.codewars.com/kata/5276c18121e20900c0000235

function findNumber(array) {
    // what should the total value of the array be?
    // for an array of length n, n*(n+1)/2 = total value of all sequential elements
    const expectedTotal = (array.length + 1) * (array.length + 2) / 2;
    
    // calculate the actual value
    let actualTotal = 0;
    for (let i=0; i < array.length; i++) {
      actualTotal += array[i]
    }
    
    // subtract the expected total value from the calculated total value
    // to find the missing value
    return expectedTotal - actualTotal
}

// May 2020