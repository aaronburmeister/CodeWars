// https://www.codewars.com/kata/514b92a657cdc65150000006

function solution(number){
    const multiple3 = Math.floor((number-1) / 3)
    const multiple5 = Math.floor((number-1) / 5)
    let multiplesOfThree = []
    let multiplesOfFive = []
    for (let i=0; i < multiple3; i++) {
      multiplesOfThree.push((i+1) * 3)
    }
    for (let i=0; i < multiple5; i++) {
      multiplesOfFive.push((i+1) * 5)
    }
    // remove values that are in both arrays
    for (let i=0; i < multiplesOfFive.length; i++) {
      if (multiplesOfThree.includes(multiplesOfFive[i])) {
        multiplesOfFive[i] = 0
      }
    }
    const sum = multiplesOfThree.reduce((a,b) => a+b, 0) +
                multiplesOfFive.reduce((a,b) => a+b, 0)
    return sum
}

// May 2020