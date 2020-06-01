// https://www.codewars.com/kata/540afbe2dc9f615d5e000425

var Sudoku = function(data) 
{
  //   Private methods
  // -------------------------
  const validateNumbers = (testNumbers) => {
    // get list of numbers
    let requiredNumbers = []
    for (let i=1; i <= data.length; i++) {
      requiredNumbers.push(i)
    }
    testNumbers = [...testNumbers].sort()
    requiredNumbers = requiredNumbers.sort()
    // cycle through each number - if not a number or failed match, return false
    for (let i=0; i < testNumbers.length; i++) {
      if (testNumbers[i] != requiredNumbers[i]) return false
      if (!Number.isInteger(testNumbers[i])) return false
    }
    return true;
  }

  //   Public methods
  // -------------------------
  return {
    isValid: function() {      
      // test rows
      for (let i=0; i < data.length; i++) {
        if (!validateNumbers(data[i])) return false
      }
      console.log("Passed Row Tests")
      
      // test columns
      let cols = []
      for (let i=0; i < data.length; i++) {
        let column = []
        for (let j=0; j < data.length; j++) {
          column.push(data[j][i])
        }
        cols.push(column)
      }
      for (let i=0; i < data.length; i++) {
        if (!validateNumbers(cols[i])) return false
      }
      console.log("Passed Column Tests")
      
      // test "little squares"
      const n = Math.sqrt(data.length)
      let rowStart = 0, rowEnd = n, colStart = 0, colEnd = n;
      for (let i=0; i < data.length; i++) {
        let block = []
        for (let j=colStart; j < colEnd; j++) {
          let blockRow = data[j].slice(rowStart,rowEnd)
          block.push(...blockRow)
        }
        if (!validateNumbers(block)) return false
        if (rowEnd == data.length) {
          rowStart = 0, rowEnd = n, colStart += n, colEnd += n
        } else {
          rowStart += n, rowEnd += n;
        }
      }
      console.log("Passed 'Little Squares' Tests")

      return true;
    }
  };
};

// June 1, 2020