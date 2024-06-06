
// const mydate = new Date() 
// console.log(mydate);
// console.log(mydate.toDateString());

// console.log(mydate.toLocaleString());

// const mdate = new Date(2024, 1, 25, 5, 5) 
// console.log(mdate.toDateString());
let createdDate=new Date("01-14-2023")
// console.log(createdDate.toLocaleString());
const myTime= Date.now()
// console.log(createdDate.getTime());//get milisecond
// console.log(Math.floor(myTime/1000));//get second


let newDate=new Date()
console.log(newDate.getMinutes());


newDate.toLocaleString('defult',{
    weekday:"long",
    timeZoneName:
})