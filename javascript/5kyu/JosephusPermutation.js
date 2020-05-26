// https://www.codewars.com/kata/5550d638a99ddb113e0000a2

function josephus(items,k){
    let answer = [];
    let temp = k-1 >= items.length ? (k-1) % items.length : k-1;
    for (let i=temp; i < items.length; i) {
      answer.push(...items.splice(i, 1))
      i+=k-1
      if (i > items.length && items.length != 0) { 
        while (i > items.length) {
          i -= items.length
        }
      }
      if (i == items.length) i = 0;
    }
    return answer
}

// Mid-May 2020