// https://www.codewars.com/kata/582c297e56373f0426000098

function stringify(list) {
    // Write your code here
    if (list) {
    let array = []
    array[0] = list.data;
    array[1] = list.next ? stringify(list.next) : "null"
    
    return array.join(' -> ')
    } else return "null"
}

// June 5, 2020