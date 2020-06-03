// https://www.codewars.com/kata/583203e6eb35d7980400002a/javascript

function countSmileys(arr) {
    return arr.reduce((sum, smiley) => {
      if (smiley.match(/[;:]+[-~]?[)D]+/g)) return sum + 1
      else return sum
    }, 0)
}

// June 3, 2020