// https://www.codewars.com/kata/529e2e1f16cb0fcccb000a6b

var splitInteger = function(num, parts) {
    const array = [];
    const average = Math.floor(num / parts)
    for (let i=0; i < parts; i++) {
      array.push(average);
    }
    
    count = 0;
    while (array.reduce((a,b) => a+b, 0) < num) {
      array[count] += 1;
      count++;
    }
  
    return array
}

// Early May 2020