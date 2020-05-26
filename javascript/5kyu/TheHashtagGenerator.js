// https://www.codewars.com/kata/52449b062fb80683ec000024

function generateHashtag (str) {
    str = str.split(" ")
          .map( word  => {
      if (word.length > 0) {
        let capitalLetter = word[0].toUpperCase()
        const capitalizedWord = capitalLetter+word.slice(1)
        return capitalizedWord
      } else return word
    }).join("")
    return `#${str}`.length > 140 || `#${str}`.length == 1 ? false : `#${str}`
}

// May 21, 2020