function alternateCase(str) {
    let newStr = ""
    if(str.length === 0){
        return ""
    }
    for(let letter = 0; letter < str.length; letter+=1) {
        if(letter % 2 === 0){
            newStr += str[letter].toUpperCase()
        } else{
            newStr += str[letter]
        }
    }
    return newStr
}

module.exports = alternateCase;
