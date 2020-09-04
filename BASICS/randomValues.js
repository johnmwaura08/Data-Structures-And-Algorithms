/*
Random numbers are useful for creating random behavior.
JavaScript has a Math.random() function that generates a random decimal number between 0 (inclusive) and not quite up to 1 (exclusive).
 Thus Math.random() can return a 0 but never quite return a 1

Note
Like Storing Values with the Equal Operator, all function calls will be resolved before the return executes, 
so we can return the value of the Math.random() function.

*/

function randomFraction() {

  
  //lets multiply the math.random by 10 to get a number between 0 & 9
  //we can also use Math.floor to round it up

    return Math.floor( Math.random() * 10 );

  }

  console.log(randomFraction())
  

//   Instead of generating a random whole number between zero and a given number like we did before,
//    we can generate a random whole number that falls within a range of two specific numbers.
// To do this, we'll define a minimum number min and a maximum number max.

// this is the formula =======> 
// Math.floor(Math.random() * (max - min + 1)) + min

function randomRange(myMin, myMax) {

     return  Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
    ;
    
  }

  console.log(randomRange(2, 5)) //returns an eexample 3 
  console.log(randomRange(1, 45)) //returns an example 16
  console.log(randomRange(2, 99)) //returna an example 77
