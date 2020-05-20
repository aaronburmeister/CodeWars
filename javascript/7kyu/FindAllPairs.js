// https://www.codewars.com/kata/5c55ad8c9d76d41a62b4ede3

function duplicates(array){
    let count = 0;
    for (let i=0; i < array.length; i) {
        const number = array.splice(i, 1)[0]
        if (array.findIndex(match => match === number) > -1) {
            array.splice(array.findIndex(match => number === match), 1)
            count++
        }
    }
    return count;
}

// Late April 2020