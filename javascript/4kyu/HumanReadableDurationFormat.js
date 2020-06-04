// https://www.codewars.com/kata/52742f58faf5485cae000b9a/javascript

function formatDuration (seconds) {
    if (seconds == 0) return "now"
    else {
      let humanReadable = []
      // function to figure out times
      function timeTest(time, units) {
        if (seconds >= time) {
          const timeUnits = Math.floor(seconds / time)
          if (timeUnits > 1) humanReadable.push(`${timeUnits} ${units}`)
          else humanReadable.push(`${timeUnits} ${units.slice(0,units.length-1)}`)
          seconds = seconds % time
        }
      }
      
      // years
      timeTest(31536000, "years")
      // days
      timeTest(86400, "days")
      // hours
      timeTest(3600, "hours")
      // minutes
      timeTest(60, "minutes")
      // seconds
      timeTest(1, "seconds")
      
      // format duration
      let string = ""
      for (let i=0; i < humanReadable.length; i++) {
        if (i == humanReadable.length-2) {
          string += `${humanReadable[i]} and `
        } else if (i == humanReadable.length-1) {
          string += humanReadable[i]
        } else {
          string += `${humanReadable[i]}, `
        }
      }
      return string;
    }
}

// June 4, 2020