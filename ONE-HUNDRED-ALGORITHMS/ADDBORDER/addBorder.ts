//we have an array of strings and we need to build a border around it
function addBorder(picture: string[]): any {
    const wall = '*'.repeat(picture[0].length + 2) //we're finding the length of the first item of the array and adding 2. then repeating the * that times

    picture.unshift(wall);
    picture.push(wall)

    for(let i = 1 ; i < picture.length - 1; i++ ) { //i = 1 because we've arleady changed the first item and same with last item so we use picture.length -1 

            picture[i] = '*'.concat(picture[i], '*') //this puts a * before and at the end of the index
    }
    return picture;
}

console.log(addBorder(["abc", "ded", "fgh"])); // logs [ '*****', '*abc*', '*ded*', '*fgh*', '*****' ] 