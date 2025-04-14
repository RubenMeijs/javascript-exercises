const reverseString = function(stringToReverse) {
    let reversedString = ""

    let stringLength =  stringToReverse.length

    for (let i = 0; i < stringLength; i++) {
        reversedString += stringToReverse.slice(-1)
        stringToReverse = stringToReverse.slice(0,-1)
        
    }

    return reversedString
};

// Do not edit below this line
module.exports = reverseString;
