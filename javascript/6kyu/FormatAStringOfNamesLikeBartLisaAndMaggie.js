// https://www.codewars.com/kata/53368a47e38700bd8300030d

function list(names){
    let result = '';
    for (let i=0; i < names.length; i++) {
      if (i === names.length - 2) {
        result += `${names[i].name} & ${names[i+1].name}`
        i += 2;
      } else if (names.length === 1) {
        result +=`${names[i].name}`
      } else {
        result += `${names[i].name}, `
      }
    }
    return result
}

// May 2020