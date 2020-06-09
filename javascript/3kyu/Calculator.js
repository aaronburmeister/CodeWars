// https://www.codewars.com/kata/5235c913397cbf2508000048/javascript

const Calculator = function() {
    this.evaluate = string => {
  
      // calculate an operation
      let calculate = (expression) => {
        expression = expression.split(' ')
        switch (expression[1]) {
          case '+':
            return Number(expression[0]) + Number(expression[2])
          case '-':
            return Number(expression[0]) - Number(expression[2])
          case '/':
            return Number(expression[0]) / Number(expression[2])
          case '*':
            return Number(expression[0]) * Number(expression[2])
        }
      }
      
      if (!string.match(' ')) return Number(string)
      
      // Regular Expressions
      const multiplyDivide = /-?(\d+\.?\d*(e-?\d*)?)\s(\/|\*)\s-?(\d+\.?\d*(e-?\d*)?)+/
      const addSubtract = /-?(\d+\.?\d*(e-?\d*)?)\s(\+|-)\s-?(\d+\.?\d*(e-?\d*)?)+/
      
      // check for multiplication/division
      while (string.match(multiplyDivide)) {
        let match = string.match(multiplyDivide)
        string = string.replace(multiplyDivide, calculate(match[0]))
      }
  
      // check for addition/subtraction
      while (string.match(addSubtract)) {
        let match = string.match(addSubtract)
        string = string.replace(addSubtract, calculate(match[0]))
      }
  
      return Number(string)
    }
};

// June 9, 2020