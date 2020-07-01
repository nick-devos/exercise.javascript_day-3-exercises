function isNumber(stringInput) {
    return !isNaN(stringInput);
}

console.log("is it a number? " + isNumber(prompt("Enter a number for isNumber function")));

function convertToNumber(stringInput) {
    return parseFloat(stringInput);
}

console.log(convertToNumber(prompt("Enter a number for convertToNumber function")));