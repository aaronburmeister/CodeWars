// https://www.codewars.com/kata/5aa7a581fd8c06b552000177

function loveLanguage(partner,weeks) {
    const loveLanguageSuccesses = [];
    const chances = weeks * 7;
    const chancesPerLanguage = Math.floor(chances / 5);
    let leftOver = chances % 5;
    for (let i=0; i < 5; i++) {
      const attemptedLanguage = LOVE_LANGUAGES[i]
      let bonus = 0
      if (leftOver > 0) {
        bonus = 1
        leftOver--
      }
      for (let j=0; j < chancesPerLanguage + bonus; j++) {
        const partnerResponse = partner.response(attemptedLanguage)
        if (partnerResponse === 'positive') {
          loveLanguageSuccesses.push(attemptedLanguage)
        }
      }
    }
    const languageSuccessCount = loveLanguageSuccesses.reduce(function (languages, language) {
      if (language in languages) {
        languages[language]++
      } else {
        languages[language] = 1
      }
      
      return languages
    },{})
    const successfulLoveLanguages = Object.keys(languageSuccessCount)
    let mostSuccessfulLanguage = "";
    let mostCounts = 0;
    for (let k=0; k < successfulLoveLanguages.length; k++) {
      const currentWord = successfulLoveLanguages[k]
      if (languageSuccessCount[currentWord] > mostCounts) {
        mostSuccessfulLanguage = currentWord
        mostCounts = languageSuccessCount[currentWord]
      }
    }
    
    return mostSuccessfulLanguage
}

// Early May 2020