// https://www.codewars.com/kata/514a024011ea4fb54200004b

function domainName(url){
    return url.replace(/(https?:\/\/)?(www\.)?/g,'').split('.')[0]
}

// June 5, 2020