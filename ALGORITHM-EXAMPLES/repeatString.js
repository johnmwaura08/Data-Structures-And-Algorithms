/* Repeat a string */

//The task is to write a function that takes two parameters,
// one is a string and one is the number of times the string will be repeated 
// return an empty string if num is not a positive number 

// this is very simple we'll just use new Array method fill and then we can use join to put them together if we want to 


function repeatStringNumTimes(str, num) {

    if(num< 0) return "";

 

     return new Array(num).fill(str).join('')
   
}


console.log(repeatStringNumTimes("abc", 4)) //returns  [ 'abc', 'abc', 'abc', 'abc' ] if we dont add join 

console.log(repeatStringNumTimes("abc", 4)) //returns abcabcabcabc if we add join 


