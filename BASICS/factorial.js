/* 
If an integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n
factorials are often represented with n! 
eg.. 5! = 1 * 2 * 3 * 4 * 5 
*/

//lets create a function that returns the factorial of the provided integer
//Only integers greater than or equal to zero will be supplied to the function.

// This is great because we'll include recursion
//the base case is the stopping condition
// we need  a base case where n is equal to one or n is equal to 0
//we'll put that in an if statement and then else we return n multiplied by the fuction taking n minus one

function factorialize(num) {
  if (num == 0 || num == 1) {
    return 1;
  } else {
    return num * factorialize(num - 1);
  }
}

//

console.log(factorialize(4)) //returns 24
console.log(factorialize(5)) //returns 120
console.log(factorialize(6)) //returns 720 

//soo, lets take for example 4, the function  goes in, checks the base case, is 4 equal to 1, is 4 equal to 0, 
//which its not, so it skips the base case and goes to the else statement
//which is 4 * factorialize(3)
//so we need to process factorialize 3 now 
//the function runs again, checks the base case, 3 is not equal to 1 or 0
//it goes to the else statement
//it becomes 3 * factorialize(2)
//so we need to process factorialize 2 now
//same thing, base case is skipped and we jump to else statement
//it becomes 2 * factorialize(1)
//the function runs again to process factorialize(1)
// this time n is equal to 1 so instead of going to the recursive call we just return 1 
// so now 2 * 1 is equal to 2 and this is the value of the factorial (2)
// 3 * 2 which is 6 is the value of factorial (3)
//which gets bubbled up
//so 4 * factorialize(3) is the same as 4 * 6 = 24 
// basically the last value 1 is being bubbled up till we find the value of the function we're looking for

// we had 4 * factorialize (3) which became
        // 3 * factorialze (2) which goes down to 
            // 2 * factorialize (1)
             // and since n is 1, factorialize(1) returns 1 which is our base case 
              // it now gets bubbled up till we find the factorial of 4



