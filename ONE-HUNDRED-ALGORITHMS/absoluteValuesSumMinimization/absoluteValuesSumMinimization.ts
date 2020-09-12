function absoluteValuesSumMinimization(a: number[]): number {

    const isEven = a .length % 2 === 0; // this will tell me if a is even because the remainder should be zero in an even 

    return isEven ? a[a.length / 2 - 1] : a[Math.floor(a.length/ 2)];
}

// This is basically asking me  to return the median value 
// if its the length of the array is even than return the left one of the 2 middle values 
// our ternary operator basically says that if the array is even , 
//then divide its length by 2 then subtract 1 to get the left side value which is the median
// However if its odd, divide the length by 2 and round it down to get a whole number and this value of the array will be our index
console.log(absoluteValuesSumMinimization([2, 4, 7])); // logs 4
console.log(absoluteValuesSumMinimization([2, 4, 7, 6])); //logs 4
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6])); // logs 7
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));  //logs 7