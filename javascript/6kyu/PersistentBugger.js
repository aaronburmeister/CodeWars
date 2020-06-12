// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/javascript

function persistence(num) {
    num = num.toString()
    let counter = 0
    while (num.length > 1) {
      num = num.split('')
                .reduce((a, b) => a * b)
                .toString()
      counter++
    }
    return counter;
}

// June 12, 2020