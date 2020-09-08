/*------------------------Truncate a String---------- */

// The task is to truncate a string if it is longer than the given maximum length
//we'll use the slice method
//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
//Return the truncated string with a ... ending.

function truncateString(str, num) {

    let finalStr = '';

    if(str.length > num) {
     
        finalStr = str.slice(0, num) + '...'
    }

    else {
        finalStr = str;
    }

    return finalStr;
}

console.log(truncateString("Make your life a masterpiece , imagine no limitations on what you can be, have or do", 10)); //returns Make your ...

console.log(truncateString("Act as if what you do makes a difference", 8)); //returns Act as i...