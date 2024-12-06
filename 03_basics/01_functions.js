function name(){
    console.log("N");
    console.log("I");
    console.log("H");
    console.log("A");
    console.log("A");
    console.log("L");
}

name() 
name//giving reference where name function stays like  giving address

function sum(num1, num2 ){//num1 and num2 are parameters
    //console.log(num1+num2);
    return num1+num2;
}

const result = sum()//4 and 5 are arguments

 
console.log(result);//it is undfined as we have not returned anything
//if no parameter is passed then NaN is the result 

function login(username){
    // if(username===undefined){
    //     return "Enter a proper UserName"
    // }
    return `${username} is logged in`
}

console.log(login());//if no argument is passed then username takes the value of undefined;

//Rest operator !!
function call(...num1){
    return num1;
}

console.log(call(1,2,3));
