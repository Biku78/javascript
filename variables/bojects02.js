// singleton 
//const tinderUser=new Object()//singleton objects declared or 
const tinderUser = {}// non singleton objects
tinderUser.id='123abc'
tinderUser.email="some@gmail.com"

const regularName={
     fullName:{
        firstName:{
            name:"bikram",
            last:"swain"
        }
    }
}

//console.log(tinderUser);// only empty objects
//console.log(regularName.fullName.firstName.name);

// adding like array objects ??
const a={1:"a"}
const b= {2:"2"}
//const c= Object.assign(a,b)

const c=[...a,...b]// wrong 
console.log(c);