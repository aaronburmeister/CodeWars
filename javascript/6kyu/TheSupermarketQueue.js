// https://www.codewars.com/kata/57b06f90e298a7b53d000a86

function queueTime(customers, tills) {
    let lines = []
    for(let i=0; i<tills; i++) lines.push(0)
    customers.forEach(customer => {
      lines[lines.indexOf(Math.min(...lines))] += customer
    })
    return Math.max(...lines)
}

// June 19, 2020