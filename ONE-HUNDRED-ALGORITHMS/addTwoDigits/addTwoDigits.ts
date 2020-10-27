function addTwoDigits(n: any): number {
	//i am converting the number to a string and then using split to convert it to an array 
	//l'll then use reduce to add the items in the array whilst using parseInt to convert them to integers first
	const nums = n.toString().split('')
	return nums.reduce((a: string, b: string) => {
		return parseInt(a) + parseInt(b)
	)}


}

console.log(addTwoDigits(35)) // returns 8
console.log(addTwoDigits(96)) // returns 15


function addTwoDigitsAnotherWay(n: number): number {
	//this is a much cleaner way,same process as the first one 
	//but this time i simply use parseInt on the first and second index of the array and add them from there
	const nums = n.toString().split('')
	return parseInt(nums[0]) + parseInt(nums[1])
}

console.log(addTwoDigitsAnotherWay(35)) //returns 8
console.log(addTwoDigitsAnotherWay(96)) //returns 15
