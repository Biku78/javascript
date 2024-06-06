const myArray=[2,3,,4]
// console.log(myArray);

// console.log(myArray[0]);
// const array=new Array(1,2,3,4,)
// console.log(array);


//////////////method//////////////
myArray.push(5)// push any element to the array 
myArray.pop()// deleting last element in the array
myArray.unshift(0) // putting first element in array
myArray.shift()// deleting  unshift value
// console.log(myArray);
// console.log(myArray.includes(6));// get ans of question either true or false
// console.log(myArray.indexOf(7));//return number present which of index and if false  return -1
// console.log(myArray.indexOf(2));


const myNew1=myArray.join() //get array value into string
// console.log(myArray);
// console.log(myNew1);
// console.log(typeof myNew1);


//////////////**** slice and splice */

console.log(myArray);
const my=myArray.slice(1,2)
console.log( "A" ,my);
console.log(myArray);
const my1=myArray.splice(1,2)
console.log('B',my1);
console.log(myArray);
