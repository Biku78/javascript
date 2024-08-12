if(true){
    const a=10
    let b=20
    var c=30
}
// console.log(a);
// console.log(b);
// console.log(c);

// nested scope.........
function one(){
    const username="bikram"
    function two(){
        const website='youtube'
        console.log(username);
        console.log(website);
        
        
    }
    two()

}
one()

//  ///////////////// nested if 

if (true){
    const username="bikram"
    if(username==="bikram"){
        const website=" youtube"
        console.log(username+website);
        
    }
}


// intrresting facts

addone(4)
function addone(num){
    return num+1
}



const addtwo=function(num){
    return num+2
}
addtwo(5)
