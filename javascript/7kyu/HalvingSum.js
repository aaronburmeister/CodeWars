// https://www.codewars.com/kata/5a58d46cfd56cb4e8600009d

function halvingSum(n) {
    let divisor = 2;
    let sum = n;
    let num = 2;
    while ( num > 1 ) {
        num = Math.floor( n / divisor )
        sum += num
        divisor *= 2
    }
    return sum
}

// Late April 2020