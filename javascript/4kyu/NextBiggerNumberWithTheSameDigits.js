// https://www.codewars.com/kata/55983863da40caa2c900004e

function nextBigger(n){
    console.log("n = ", n)
    // turn n into an array for digit manipulation
    let arr = n.toString().split('').map(Number)
    
    // if n is already the largest number possible, return -1
    if (n == Number([...arr].sort().reverse().join(''))) return -1
    
    // if array is length 2 and isn't in the largest formation, return reverse
    let rev = [...arr].reverse()
    if (arr.length == 2) return Number([...rev].join(''))
    
    // starting on right, find first digit that is smaller than one to its immediate right
    // then swap that number with the 2nd lowest number to its right (all of them)
    // then sort the digits to the right, creating the smallest number bigger than the given number
    // I used a reverse array and did this all backwards because arrays are easier to work with starting at index 0
    let index, secondSmallest
    for (let i=0; i < rev.length-1; i++) {
      if (rev[i+1] < rev[i]) {
        index = i+1
        let indexNumber = rev[index]
        // find second smallest digit GREATER THAN the number
        let numbersBiggerThanIndexNumber = [...rev].slice(0,index).filter( number => number > rev[index])
        secondSmallest = Math.min(...numbersBiggerThanIndexNumber)
        // find that number, replace it
        for (let j=0; j < i+1; j++) {
          if (rev[j] == secondSmallest) {
            rev[index] = secondSmallest
            rev[j] = indexNumber
            break
          }
        }
        // return the number, combined with the sorted right-hand side
        return Number([...rev].slice(index)
                              .reverse()
                              .concat([...rev].slice(0,index).sort())
                              .join(''))
      }
    }
}

//  May 26, 2020