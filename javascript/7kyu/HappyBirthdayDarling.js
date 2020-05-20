// https://www.codewars.com/kata/5e96332d18ac870032eb735f

function womensAge(n) {
    switch(n % 2) {
        case(0):
            return `${n}? That's just 20, in base ${n / 2}!`
        case(1):
            return `${n}? That's just 21, in base ${(n - 1) / 2}!`
    }
}

// April 2020