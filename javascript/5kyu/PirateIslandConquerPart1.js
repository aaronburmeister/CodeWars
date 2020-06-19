// https://www.codewars.com/kata/59604925a68b04598e00001e

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
      let closestLength = Math.min(...locations['u'].map(coordinates => coordinates[0] + coordinates[1]))
      return locations['u'].filter(coordinates => coordinates[0] + coordinates[1] == closestLength)
    } else if (locations['m'].length > 0) {
      let closestLength = Math.min(...locations['m'].map(coordinates => coordinates[0] + coordinates[1]))
      return locations['m'].filter(coordinates => coordinates[0] + coordinates[1] == closestLength)
    } else return locations['u']
}

// June 18, 2020