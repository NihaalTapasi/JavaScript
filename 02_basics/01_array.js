//------------------Array------------------------
const myArr = [1,2,3,4,5]
const hero = ['ironman','batman','doremon']
const myArr2 = new Array(1,2,3,4)
console.log(myArr);
 

//------------array method----------------------
myArr.push(6)
console.log(myArr);
myArr.pop()
console.log(myArr);
myArr.unshift(3)//3 gets attded to 1st
console.log(myArr);
myArr.shift()//removes the starting index 
console.log(myArr);
myArr.indexOf(7)//tells in which index 7 is present. if not present then -1


//Imp
const myArr3 = myArr.join() //returns array in string 
console.log(myArr3);
console.log(typeof myArr3);

//slice and space 

console.log("A ", myArr);
const myn1= myArr.slice(1 ,3)
console.log(myn1);
console.log("B ", myArr);

//IMP !!! diff b/w splice and slice 
const myn2= myArr.splice(1 ,3);
console.log(myn2);//includes the range 
console.log("C ", myArr);//The original array also get's altered  



