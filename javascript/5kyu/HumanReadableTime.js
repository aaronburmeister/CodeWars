// https://www.codewars.com/kata/52685f7382004e774f0001f7/javascript

function humanReadable(seconds) {
    let string = ""
    // hours
    let hours = Math.floor(seconds / 3600)
    string += hours > 9 ? hours + ":" : "0" + hours + ":"
    seconds = seconds % 3600
    // minutes
    let minutes = Math.floor(seconds / 60)
    string += minutes > 9 ? minutes + ":" : "0" + minutes + ":"
    seconds = seconds % 60
    // seconds
    string += seconds > 9 ? seconds : "0" + seconds
    return string 
}

// June 29, 2020