"use strict" // treats all jS files as newer version of JS
let a;
let b=null;
let c = 8,y="33hi";
const x=3.14;
console.log(typeof(b));
// it is disadvantage of js that null is considered as object

// alert(3+3) we are using  nodejs not webbrowser so no popup
console.log(typeof x,y);
//typeof is working only for x and then it is printing the var value

let valueInNumber=Number(y);
console.log(typeof(valueInNumber));//it shouldn't show as number but then it shows Nan
console.log(valueInNumber);//if we use y=NULL then valeInNumber=0 , if we use y =underfined then NaN, boolean then 1(if true)
//Nan is not a number

