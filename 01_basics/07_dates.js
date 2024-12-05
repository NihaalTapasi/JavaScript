//date

let myDate = new Date()//as we aRe using new so it is a obj 

console.log(typeof(myDate))//object
console.log(myDate.toString());//day date time IST
console.log(myDate.toISOString());//IDK
console.log(myDate.toDateString());//day date
console.log(myDate.toLocaleDateString());//date with /
console.log(myDate.toLocaleString());//date with / and time
console.log(myDate.toTimeString());//time IST
console.log(myDate.toUTCString());//day date GMT
console.log(myDate.getTimezoneOffset());//IDK


//--------------------Creating New Date----------------------------

let createMyDate = new Date(2024,0,24)// YYYY/MM/DD note Month starts from Jan = 0 
let myBthDay = new Date(2004,7,23);

console.log(`My B'th Day Date is : ${myBthDay.toDateString()}`);
console.log(`My B'th Day Date is : ${myBthDay.toLocaleDateString()}`);

let myBroBthDay = new Date(2008,6,24,16,0,15)//Imp
console.log(`My Bro's B'th Day Date and Time is : ${myBroBthDay.toLocaleString()}`);

//In India we prefer MM DD YYYY
let myPaBthDay = new Date("02-26-1966")
console.log(`My Pa's Bth Date is : ${myPaBthDay.getDate()}`);
console.log(`My Pa's Bth Month is : ${Intl.DateTimeFormat('en-US', { month: 'short' }).format(myPaBthDay)}`);
console.log(`My Pa's Bth Month is : ${Intl.DateTimeFormat('en-US', { month: 'long' }).format(myPaBthDay)}`);
console.log(`My Pa's Bth Day and Date is : ${myPaBthDay.toDateString()}`);



console.log(createMyDate.toDateString());


//-------------------------Time Stamps-----------------------------------------

let timeStamp= Date.now()
console.log(timeStamp);//millsec from the time of date : January 1, 1970, UTC (the epoch)
//--> { Comparing Dates }
console.log(myBthDay.getTime()) // gets the time from my bth day wrt to the Epoch 

// Conversion to sec  as the previous onces where in millisec
console.log(Math.floor(timeStamp/1000)); //1s = 10000 mill sec = 10^3 milli sec
console.log(myBthDay.toLocaleString('default',{weekday: "long",month:"short", day:"2-digit", year: "numeric"}));//if you do ^ + space then you get the properties 
console.log(myBthDay.toLocaleString());//if you do ^ + space then you get the properties 