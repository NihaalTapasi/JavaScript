let IsLogginedIn="h"; 
let boolean=Boolean(IsLogginedIn)
console.log(boolean);
/* 
    if IsLoggiedIn value assigned: 
    ""==> False
    "Hi"==> True
    0  ==> False
    1 ==> True
    undefined ==> false
*/

console.log(3/2);//returns float value
console.log(2**4);//2^4=16 it is power if we use ** two times

/*      -----Operations----  */
console.log(3+5)
console.log("3"+5);//it converts 5 into string then does 35
console.log("3"+5);//it converts 5 into string then does 35
console.log(2+3+"5");//initially it will do all the maths problems then it will create as a string operations refer ecma
//!!note it is incorect to do such things !!!


console.log(true);//prints true
console.log(+true);//prints true value as integer NOTE : true+ will give error
console.log("");//prints empty string
console.log(+"")//prints false as "" is consider false 

console.log(""==0);
console.log(null>0)
console.log(null<0);
console.log(null==0);
console.log(null>=0,'\n');
/* NOTE : the reason to equality check == and comparisons >,<=,> work differently  

comparision convert null to no. , treating it as  0
where as == works differently 
*/

console.log(undefined==0);
//undefined will not get converted to a number so it will show false

console.log('0'===0);

/* if you use === strict equality then it will check datatypes also */