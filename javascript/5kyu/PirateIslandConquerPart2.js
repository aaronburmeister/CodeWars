// https://www.codewars.com/kata/5962b98c2e8c8b02fa0000b4/javascript

function conquerIsland(map) {
    // find coordinates of different islands
    let locations = {
      p: [],
      u: [],
      m: []
    }
    // parse through map and find locations
    for(let i=0; i<map.length; i++) {
      for(let j=0; j<map[i].length; j++) {
        switch(map[i][j]) {
          case 'p':
            locations['p'].push([i,j])
            break;
          case 'u':
            locations['u'].push([i,j])
            break;
          case 'm':
            locations['m'].push([i,j])
            break;
          default:
            break;
        }
      }
    }
    
    // check for closest islands, starting with unoccupied, then marine
    if (locations['u'].length > 0) {
      let distances = locations['u'].map(coords => {
        return Math.min(...locations['p'].map(pirate => {
          return Math.abs(pirate[0] - coords[0]) + Math.abs(pirate[1] - coords[1])
        }))
      })
      return locations['u'].filter((value, index) => distances[index] == Math.min(...distances))
    } else if (locations['m'].length > 0) {
      let distances = locations['m'].map(coords => {
        return Math.min(...locations['p'].map(pirate => {
          return Math.abs(pirate[0] - coords[0]) + Math.abs(pirate[1] - coords[1])
        }))
      })
      return locations['m'].filter((value, index) => distances[index] == Math.min(...distances))
    } else return locations['u']
  }

// June 22, 2020