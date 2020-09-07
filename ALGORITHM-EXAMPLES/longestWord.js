/* -------------Find the Longest Word in a string  */

// The task is to write a function that returns the length of the longest word in a provided sentence
// the response should be a number

// we'll write a function that accepts a string as its parameter
// we can start by returning str.split(' ') and logging that to the console
// remember to add a space between the quotes in the split function because if you dont it'll log each letter but we want it to log each word so we'll do the space.
// in the console you'll see an array containing the words of the string whoch in our case is a sentence
// now we can map over the array to find the length of each word , this will return an array of numbers whoch represent the lengths of the words
// we can assign our return to a variable and then spread that variable in the math.max so as to find the longest word

function lengthOfLongestWord(str) {

    const length = str.split( ' ').map((elem) => elem.length)

    return Math.max(...length)

    
}


console.log(lengthOfLongestWord("Giving yourself deadlines and timelines is of the utmost importance")); // returns 10 which is the length of the longest word

console.log(lengthOfLongestWord("consistency will pay off in the long term ")); // returns 11 which is the length of the longest word 

console.log(lengthOfLongestWord("Dreams dont work unless you do")); // returns 6 which is the length of the longest word 


// so now, we've found the length of the longest word in the array.
// what if we want to find the actual word now?

//we start by defining two variables one for the length of the longest word which we'll start as zero 
// and another variable which we'll define as an empty string

//we write a function that accepts a str as an argument
 // we use the split function to the str and assign the result to a variable myArray
 //we then looop through myArray and add a conditional statement to get the longest word 

 function valueOfLongestWord (str) {

    let longestWordLength = 0;
    
    let longestWordValue = '';

    const myArray = str.split(' ');

    for(let i = 0; i<myArray.length; i++ ) {

        if(myArray[i].length > longestWordLength) {
            
            longestWordLength = myArray[i].length;

            longestWordValue = myArray[i]

        }
    }

    return longestWordValue;
 }

 console.log(valueOfLongestWord("Be fearless in the pursuit of what sets your soul on fire")); //returns fearless

 console.log(valueOfLongestWord("Dont Give up, what doesn't kill you only makes you stronger")); //returns stronger

 console.log(valueOfLongestWord("patience, hunger, belief and passion")); //returns patience

