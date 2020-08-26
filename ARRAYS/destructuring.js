/*
In some situations involving array destructuring, we might want to collect the rest of the elements into a separate array.

The result is similar to Array.prototype.slice(), as shown below: /* */

const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // 1, 2
console.log(arr); // [3, 4, 5, 7]

/*
Variables a and b take the first and second values from the array. 
After that, because of the rest parameter's presence, arr gets the rest of the values in the form of an array. 
The rest element only works correctly as the last variable in the list. As in, you cannot use the rest parameter to catch a subarray that leaves out the last element of the original array.

/*
Use destructuring assignment with the rest parameter to perform an effective Array.prototype.slice() so that arr is a sub-array of the original array source with the first two elements omitted.
*/


const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
 

 const [,,...arr] = list;
 
  return arr;
}
const arr = removeFirstTwo(source);

console.log(arr); //console output [ 3, 4, 5, 6, 7, 8, 9, 10 ]