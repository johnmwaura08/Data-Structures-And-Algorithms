function add(param1: number, param2: number): number {

    return param1 + param2

}
// this is a simple function that adds two numbers together
console.log(add(1, 2)); // logs 3
console.log(add(3, 2)); //logs 5
console.log(add(1,2,3,4,5)); //logs 3 because it doesnt recognize the other numbers since they were not defined in the params


/** now i'm going to write a function that adds numbers together regardless of the parameters,
 * 
 *  its not constrained by the number of params 
 * 
 * */


function addsAll(...param1: number[]): number {
    let total = 0;

    param1.forEach((num) => {
        total += num;
    });

    return total;

}

// our param1 is now a numbers array, we loop through it using for each ,
//and each item(num) of the array is added to the variable total which was zero
// at the end of the loop all the numbers have been added to total and now we return total which is the sum of the items of the array

console.log(addsAll(1,2,3,4,5)); //logs 15
console.log(addsAll(2,3)); //logs 5