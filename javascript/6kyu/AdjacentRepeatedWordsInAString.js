// https://www.codewars.com/kata/5245a9138ca049e9a10007b8

function countAdjacentPairs(searchString) {
    let arr = searchString.toLowerCase().split(' ')
    let repeatedString = 0
    for (let i=0; i < arr.length-1; i++)
      arr[i] == arr[i+1] ? arr[i-1] ? arr[i-1] != arr[i] ? repeatedString++ : 0 : repeatedString++ : 0
    return repeatedString
}

// June 12, 2020