// https://www.codewars.com/kata/5848565e273af816fb000449

var encryptThis = function(text) {
    // Implement me! :)
    return text.split(" ").map( word => {
      let newWord = [...word]
      const first = word[0].charCodeAt(0)
      if (word.length > 2) {
        const second = word[1]
        const last = word[word.length-1]
        newWord[1] = last
        newWord[word.length-1] = second
      }
      newWord[0] = first
      return newWord.join("")
    }).join(" ")
}

// May 20, 2020