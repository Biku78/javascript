// singleton 
//const tinderUser=new Object()// or // singleton
const tinderUser = {}// non singleton 
//console.log(tinderUser);// onlyb empty objects
///const user=new object()

tinderUser.id="123"
tinderUser.name="Bikram"
console.log(tinderUser);
const ob1={1:"q" , 2:"w"}
const ob2={3:"q" , 4:"w"}
//const onj3={ob1,ob2}
const ob3=Object.assign({},ob1,ob2)
const ob4={...ob1,...ob2}
console.log(ob4);
