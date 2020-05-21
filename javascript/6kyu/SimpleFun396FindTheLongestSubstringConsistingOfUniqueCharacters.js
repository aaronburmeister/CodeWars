// https://www.codewars.com/kata/5bcd90808f9726d0f6000091

function longestSubstringOf(s){
    let string = '';
    let maxResult = 0;
    for (let i = 0; i < s.length; i++) {
      // if the character isn't a repeated character, add it
      if (!string.includes(s[i])) string += s[i]
      // if it is repeated, slice until the earliest copy of that character, 
      // then add the current character to the end
      else string = string.slice(string.indexOf(s[i])+1,string.length) + s[i]
      // if this string is the biggest, record it
      if (string.length > maxResult) maxResult = string.length
    }
    return maxResult
}

// May 2020