const user={
    username:"bikram",
    price: 999,
    welcomemessage:function (){
        console.log(`${this.username} , welcome`);
        console.log(this);
        
    }
}

console.log(this);

//user.welcomemessage()
user.username="bi"
user.welcomemessage()



// this inside function 

//function work(){
     user:"bikram"
    console.log(this.user);
    
//}
//work()

//.................arrowfunction..........

// how to create arrow function

const work=() => {

    user:"bikram"
    console.log(this.user);
    
}
work()

// basic arrow function 
//()=>{}

    // pure code as basic

    const biku=(num1,num2)=>(num1+num2)// if call objects
    const bu=(num1,num2)=>({user:"username"})// if call objects

    //     {
    //     return num1+num2
    // }
    console.log( biku(2,6))
    console.log( bu())
