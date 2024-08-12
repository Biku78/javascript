function sayMyName(){
    console.log("b");
    console.log("i");
    console.log("k");
    console.log("r");
    console.log("a");
    console.log("m");

}
// sayMyName()
// function addTwoNumber(num1,num2){
// console.log(num1+num2);


// }
// const result=addTwoNumber(2,"null")
// console.log("result:",result);

function addTwoNumber(num1,num2){
    // const result=num1+num2
    // console.log("bikram");

    // 
    return num1+num2
    
    
    
    }
    const result=addTwoNumber(2,"null")
    // console.log("result:",result);
    

    function loginUserMessage(username){
        if (!username){
            console.log("please enter a username");
            return
            
        }
            return`${username} just logged in `
    }
      
    console.log(loginUserMessage());
     