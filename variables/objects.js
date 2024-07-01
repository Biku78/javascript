// singleton, obkect.create


// objects literals
// take symbol print symbol(first occurs)
const mysym=Symbol("key1")
const bikram={
name: "Biku",
age: 18,
email: "bik@.com",
[mysym]:"key1"
}
console.log(bikram.age);
//console.log(bikram[age]);
console.log( typeof bikram[mysym])

bikram.email="biiii@bikram.com"
//Object.freeze(bikram)
bikram.email="hlo@.com"
console.log(bikram);

bikram.greeting=function(){
    console.log("hello");
}
bikram.greeting2=function(){
    console.log(`hello ,${this.age}`);
}
console.log(bikram.greeting());
console.log(bikram.greeting2());