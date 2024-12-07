const user = {
    username : "Nihaal",
    price: 999, 
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);//this refers to current context 
        //console.log(this);           prints the entire obj
    }
}
// user.welcomeMessage()
console.log(this);//empty 
//if this above statement is run in browser then the it will be window obj --------------!!!!IMP ------------------

// function chai(){
//     let username = "Nihaal"
//     console.log(this.username);//it is undefined !!
// }

 const chai = ()=> {
    let username = "Nihaal"
    console.log(this);//here again it will be {} 
    console.log(this.username);//it is undefined !!
 }
 chai()



 const addTwo=(num1,num2)=>{
    return num1+num2;
 }
 console.log(addTwo);



  //Implicit way : 
const addTwousingImplicit = (num1,num2) => num1+num2;//No need to write return !! even we could do (num1+num2 ) 
console.log(addTwousingImplicit(1,2));
//Imp example as we need to use return when we do {} but then we are returning a obj this time
const username2 = ()=>({username:"Nihaal"})
 console.log(username2());
 

 
