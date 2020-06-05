// https://www.codewars.com/kata/5287e858c6b5a9678200083c

function narcissistic(value) {
    // Code me to return true or false
    let string = value.toString()
    let digits = string.length
    let sum = 0;
    for (let i=0; i < digits; i++) {
      sum += Number(string[i])**digits
    }
    return sum == value ? true : false
}

// June 5, 2020