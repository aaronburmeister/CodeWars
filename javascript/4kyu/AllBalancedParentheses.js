// https://www.codewars.com/kata/5426d7a2c2c7784365000783

function balancedParens(n) {
    let answer = []
    function printParentheses(array, pos, open, close) {
      if (close != n) {
        if (open > close) {
          array[pos] = ")"
          printParentheses([...array], pos+1, open, close+1)
        }
        if (open < n) {
          array[pos] = "("
          printParentheses([...array], pos+1, open+1, close)
        }
      } else {
        const solution = array.join("")
        if (solution.length == 2*n) answer.push(solution)
        return solution
      }
    }
    if (n > 0) printParentheses([...answer], 0, 0, 0)
    return n > 0 ? answer : [""]
}

// May 20, 2020