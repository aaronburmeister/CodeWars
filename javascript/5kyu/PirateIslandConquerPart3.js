// https://www.codewars.com/kata/596557071f13e4e86a000019/javascript

function conquerIsland(map) {
    // find coordinates of different islands
    let locations = {
      p: [],
      u: [],
      m: []
    }
    // parse through map and find locations
    for(let i=0; i<8; i++) {
      for(let j=0; j<8; j++) {
        let island = {
          coordinates: [],
          treasures: 0,
          sharks: 0
        }
        switch(map[i][j]) {
          case 'p':
            island.coordinates.push(i, j)
            locations['p'].push(island)
            break;
          case 'u':
            if (i > 0) {
              if (map[i-1][j] == 't') island.treasures++
              if (map[i-1][j] == 's') island.sharks++
            }
            if (i < 7) {
              if (map[i+1][j] == 't') island.treasures++
              if (map[i+1][j] == 's') island.sharks++
            }
            if (j > 0) {
              if (map[i][j-1] == 't') island.treasures++
              if (map[i][j-1] == 's') island.sharks++
            }
            if (j < 7) {
              if (map[i][j+1] == 't') island.treasures++
              if (map[i][j+1] == 's') island.sharks++
            }
            island.coordinates.push(i, j)
            locations['u'].push(island)
            break;
          case 'm':
            if (i > 0) {
              if (map[i-1][j] == 't') island.treasures++
              if (map[i-1][j] == 's') island.sharks++
            }
            if (i < 7) {
              if (map[i+1][j] == 't') island.treasures++
              if (map[i+1][j] == 's') island.sharks++
            }
            if (j > 0) {
              if (map[i][j-1] == 't') island.treasures++
              if (map[i][j-1] == 's') island.sharks++
            }
            if (j < 7) {
              if (map[i][j+1] == 't') island.treasures++
              if (map[i][j+1] == 's') island.sharks++
            }
            island.coordinates.push(i,j)
            locations['m'].push(island)
            break;
          default:
            break;
        }
      }
    }
    
    function findBestIslands(islands) {
      // first sort by sharks
      let sharksPerIsland = islands.map(island => {
        return island.sharks
      })
      let fewestSharks = Math.min(...sharksPerIsland)
      let fewestSharkIslands = islands.filter(island => island.sharks == fewestSharks)
      if (fewestSharkIslands.length == 1) return [fewestSharkIslands[0].coordinates]
      // if more than one island have fewest Sharks, find the closest island
      let distances = fewestSharkIslands.map(island => {
        return Math.min(...locations['p'].map(pirate => {
          return Math.abs(pirate.coordinates[0] - island.coordinates[0]) + Math.abs(pirate.coordinates[1] - island.coordinates[1])
        }))
      })
      let closestIslands = fewestSharkIslands.filter((island, index) => distances[index] == Math.min(...distances))
      if (closestIslands.length == 1) return [closestIslands[0].coordinates]
      // if more than one closest island, find one with most treasure
      let treasuresPerIsland = closestIslands.map(island => {
        return island.treasures
      })
      let mostTreasures = Math.max(...treasuresPerIsland)
      let mostTreasuresIslands = closestIslands.filter(island => island.treasures == mostTreasures)
      if (mostTreasuresIslands.length == 1) [mostTreasuresIslands[0].coordinates]
      // if more than one with most treasure, return both
      return mostTreasuresIslands.map(island => island.coordinates)
    }
    
    // check for closest islands, starting with unoccupied, then marine
    if (locations['u'].length > 0) {
      return findBestIslands(locations['u'])
    } else if (locations['m'].length > 0) {
      return findBestIslands(locations['m'])
    } else return locations['u']
}

// June 23, 2020