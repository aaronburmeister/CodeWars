// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1

const snail = (array) => {

    if (array.length == 1) {
      return array[0][0] ? [array[0][0]] : []
    }
    
    let unraveled = []
    // add 1st row
    array.shift().forEach(number => unraveled.push(number))
    // add ends of each row
    array = array.map(row => {
      unraveled.push(row.pop())
      return row
    })
    // add reverse of last row
    array.pop().reverse().forEach(number => unraveled.push(number))
    // add first of each row
    array = [...array].reverse().map( row => {
      unraveled.push(row.shift())
      return row
    }).reverse()
    // if there are values left, run again
    if (array.length !== 0) {
      unraveled.push(...snail(array))
    }
    
    return unraveled
    
}

// Mid-May 2020