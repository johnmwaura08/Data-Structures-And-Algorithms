// we can use the split, reverse and join methods to reverse a string

//We may need to turn the string into an array before you can reverse it.


function reverseString(str) {
    return str.split('')
              .reverse('')
              .join('')
    }
  
    console.log(reverseString("Howdy")); //returns ydwoH
    console.log(reverseString("Hello")); //returns olleH
    console.log(reverseString("Greetings from Earth"));  //returns htraE morf sgniteerG

    