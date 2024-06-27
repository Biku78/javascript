const arr=[1,2,3,4]
const arra=[6,7,8,9]
arr.push(arra) // put an array 
//console.log(arr);

const a=arra.concat(arr) // adding two array into one array(store)
//console.log(a);


const b=[...arr,...arra]//spread operator (ek glass break into many like way)
//console.log(b);


const hoo= arr.flat(Infinity) // get individual array into one 
//console.log(hoo);


console.log(Array.isArray("bikram"))
console.log(Array.from("bikram"))
console.log(Array.from({name:"bikram"}))// interesting like interview


let c=1
let d=2

let e=3
console.log(Array.of(c,d,e)); // collect set of array from ellement