//the parseInt() function parses a string and returns an integer 
// If the first character in the string can't be converted into a number, then it returns NaN.
function convertToInteger(str) {
    return parseInt(str)
  }
  console.log(convertToInteger("0056")); //returns 56
  console.log(convertToInteger("seven")); //returns NaN
  console.log(convertToInteger("8")); //returns 8
