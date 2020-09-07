/*The task is to write a function that takes an arr consisting of sub=arrays that contain numbers, 
we're then supposed to return an array that contains  largest number from each sub-array
*/

//we'll define a variable that will contain the result and then assign it to an empty array first
//we'll two use nested for loops
//First we loop over the outer array and then loop over the inner arrays pushing the max value at each inner loop to our empty array


function largestNumbersInArrays(arr) {

    let arrOfLargestNumbers = [];

    for(let i=0; i<arr.length; i++) {

        let largestNumber = -Infinity; //this is the lowest possible value(negative infinity)

        for( let j=0; j<arr[i].length; j++) {

            if(arr[i][j]>largestNumber){
                largestNumber=arr[i][j]
            }
        }

        arrOfLargestNumbers.push(largestNumber)


    }
    
    return arrOfLargestNumbers;

}

console.log(largestNumbersInArrays([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])); //returns [ 5, 27, 39, 1001 ]

console.log(largestNumbersInArrays([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])); //returns [ 25, 48, 21, -3 ]

console.log(largestNumbersInArrays([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])); //returns [ 9, 35, 97, 1000000 ]
