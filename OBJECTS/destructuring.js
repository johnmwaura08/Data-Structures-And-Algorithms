/* 
It is possible to  destructure the object in a function argument itself.
*/
const profileUpdate = (profileData) => {
    const { name, age, nationality, location } = profileData;
    // do something with these variables
  }
//   This effectively destructures the object sent into the function. 

/* However this can also be done differently like this /*/

const profileUpdate = ({ name, age, nationality, location }) => {
  /* do something with these fields */
}
/*This removes some extra lines and makes our code look neat. 
This has the added benefit of not having to manipulate an entire object in a function — only the fields that are needed are copied inside the function.
*/

/*
##Question
Use destructuring assignment within the argument to the function half to send only max and min inside the function.
*/
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  
  const half = ({ max, min}) => (max + min) / 2.0 ;
  console.log(half(stats)); // output is 28.015
  