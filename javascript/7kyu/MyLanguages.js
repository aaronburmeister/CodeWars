// https://www.codewars.com/kata/5b16490986b6d336c900007d

function myLanguages(results) {
    const languages = Object.keys(results)
    const passingScores = []
    languages.forEach( language => {
        if (results[language] >= 60) {
            passingScores.push([language, results[language]])
        }
    })
    passingScores.sort((a, b) => b[1] - a[1])
    return passingScores.map(array => array[0])
}

// Early May 2020