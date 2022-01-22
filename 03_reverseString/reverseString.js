const reverseString = function(str) {
    let stringLetters = str.split("");
    let reverseLetters = stringLetters.reverse();
    return reverseLetters.join("");
};

// Do not edit below this line
module.exports = reverseString;
