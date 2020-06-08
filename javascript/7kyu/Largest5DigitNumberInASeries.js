// https://www.codewars.com/kata/51675d17e0c1bed195000001

function solution(digits){
    let biggestNumber = 0;
    for (let i=0; i < digits.length-4; i++) {
      let number = Number(digits.slice(i, i+5))
      if (number > biggestNumber) biggestNumber = number
    }
    return biggestNumber;
}

// June 5, 2020