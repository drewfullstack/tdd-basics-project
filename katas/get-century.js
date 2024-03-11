/*
The function getCentury should take a year as a number and return the century.

E.g. 1999 should return '20th' 2004 should return '21st' 1877 should return '19th'

It should work up to and including the year 9,999 (the '100th' century)


*/
function getCentury(str) {
    if(str.length === 0){
        return ""
    }
    const century = Math.ceil(Number(str)/100)
    const strCentury = String(century)
    const lastDigit = strCentury[strCentury.length-1]
    if(lastDigit === '1'){
       return strCentury + 'st'
    }else if(lastDigit === '2') {
        return strCentury + 'nd'
    }else if(lastDigit === '3') {
        return strCentury + 'rd'
    }else {
        return strCentury + 'th'
    }

}

module.exports = getCentury;
