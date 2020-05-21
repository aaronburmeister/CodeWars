// https://www.codewars.com/kata/5e7e4b7cd889f7001728fd4a

function toTable(data, headers=false, index=false) {
    // start table
    let table = "<table>"
    // add headers
    if (headers === true) {
      let thead = "<thead><tr>"
      if (index === true) {
        thead += "<th></th>"
      }
      data[0].forEach( header => thead += `<th>${header}</th>` )
      thead += "</tr></thead>"
      table += thead
      data.splice(0,1)
    }
    // add body
    let tbody = "<tbody>"
    let count = 1
    data.forEach( row => {
      tbody += "<tr>"
      if (index === true) {
        tbody += `<td>${count}</td>`
        count++
      }
      row.forEach( td => {
        if (td === null) {
          tbody += "<td></td>"
        } else {
          tbody += `<td>${td}</td>`
        }
      })
      tbody += "</tr>"
    })
    table += tbody
    table += "</tbody></table>"
    // return result
    return table
}

// Late April 2020