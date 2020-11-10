
//using foreach and ternary operator 
function allLongestStrings(inputArray: string[]): string[] {
  let longestLength = 0;
  const longestWords = [];

  inputArray.forEach((word: string) => {
    longestLength = longestLength < word.length ? word.length : longestLength;
  });

  inputArray.forEach((word : string) => {
	  if(word.length === longestLength){
		  longestWords.push(word)
	  }
  })

  return longestWords;
}

// using for loops and regular if statements
function allLongestStringsUsingForLoops(inputArray: string[]): string[] {
  let longestLength = 0;
  const longestWords = [];

	for( let i = 0; i < inputArray.length ; i++){
		if(longestLength < inputArray[i].length){
			longestLength = inputArray[i].length
		}
		else {
			longestLength = longestLength;
		}

	console.log(longestLength) //logs 3
	}

	for( let i =0; i < inputArray.length; i++){
		if(inputArray[i].length === longestLength){
			longestWords.push(inputArray[i]);
			console.log(inputArray[i]) //logs aba ​​​​​vcd ​​​​​​aba
		}
	}
  

  return longestWords;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"])); //returns [ 'aba', 'vcd', 'aba' ]
console.log(allLongestStringsUsingForLoops(["aba", "aa", "ad", "vcd", "aba"])); // returns [ 'aba', 'vcd', 'aba' ]

