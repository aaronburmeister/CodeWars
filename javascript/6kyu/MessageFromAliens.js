// https://www.codewars.com/kata/598980a41e55117d93000015/javascript

function decode(m) {
    const dictionary = {
      "/\\": "a", "]3": "b", "(": "c", "|)":"d", "[-": "e", "/=": "f", "(_,": "g",
      "|-|": "h", "|": "i", "_T": "j", "/<":"k", "|_": "l", "|\\/|": "m", "|\\|": "n",
      "()": "o", "|^": "p", "()_": "q", "/?": "r", "_\\~": "s", "~|~": "t", "|_|": "u",
      "\\/": "v", "\\/\\/": "w", "><": "x", "`/":"y", "~/_": "z", "__": " "
    }
    const testChar = (c) => {
      switch(c) {
        case '.': return true
        case '+': return true
        default: return false
      }
    }
    let characterDivider = new RegExp(testChar(m[0]) ? '\\' + `${m[0]}+` : `${m[0]}+`, 'g')
    return m.replace(characterDivider, ' ')
            .split(' ')
            .map(character => character.length > 0 ? dictionary[character] : character)
            .reverse()
            .join('')
}

// June 24, 2020