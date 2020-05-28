// https://www.codewars.com/kata/513e08acc600c94f01000001

// 1st attempt

function rgb(r, g, b){
    // hex conversion array
    const hexValue = [
      "0","1", "2", "3", "4", "5", "6", "7", "8", "9",
      "A", "B", "C", "D", "E", "F"
    ]
    // return converted values 
    return [r, g, b].map( color => {
      if (color > 255) color = 255
      else if (color < 0) color = 0
      let firstDigit = Math.floor((color/255) * 256 / 16)
      let secondDigit = Math.floor((color/255) * 256) % 16
      if (firstDigit == 16) {
        firstDigit = 15
        secondDigit = 15
      }
      return hexValue[firstDigit].concat(hexValue[secondDigit])
    }).join('')
}

// 2nd attempt, after learning about toString(16)

function rgb(r, g, b){
    return [r, g, b].map( color => {
      if (color > 255) return "FF"
      else if (color <= 0) return "00"
      let hex = color.toString(16).toUpperCase()
      return hex.length > 1 ? hex : "0" + hex
    }).join('')
}

// May 28, 2020