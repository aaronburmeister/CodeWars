// https://www.codewars.com/kata/573c84bf0addf9568d001299

function yesNo(arr){
    newArr = [];
    var num = 0
    while (num < arr.length) {
      newArr.push(arr.splice(num, 1)[0])
      if (num === arr.length && arr.length > 1) {
        num = 1
      } else if (num === arr.length - 1 || arr.length === 1) {
        num = 0
      } else {
        num++
      }
    }
    return newArr
}

// March 2020