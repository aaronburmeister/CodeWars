// https://www.codewars.com/kata/5e4eb72bb95d28002dbbecde

function regexContainsAll(str) {
    return `(.*[${str}]){${str.length}}`;
}

// April 2020