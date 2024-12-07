/* 
    Falsy Values 
    0 , -0 , false, BigInt, 0n , "" ,null, undefined, NaN
*/

/* 
    True Values
    "0" , 'false', " ", [], {}, function(){}
 */
let arr = []
const obj = {}

//Checking if array is empty 
if(arr.length==0){
    console.log("Array is empty");
    
}
if(Object.values(obj).length==0){
//          ^- (gives array of values of the Object named obj ).  length --> to get the length of the array
    console.log("Obj is Empty");
    
}


//Nullish Coalescing Operator. 
let a = null ?? 23;
a = undefined ?? 32;
console.log(a);

arr  = [1,2,3,4,5]
//forof
for (const element of arr) {
    console.log(element);
    
}


//Maps

let map = new Map()
map.set("IN", 'India')
map.set("US","United States")
map.set("UK",'United Kingdom')
map.set("IN","Bharat")
console.log(map);

for (const [key, value] of map) {
    console.log(key, " :- ",value);
    
}


//forin 
let obj2={
    js: "JavaScript",
    py: "Python"
}
for (const key in obj2) {
    console.log(obj2[key ]);
    
}


//------ForEach---------


//callback function : function without name
arr.forEach((item,index, array)=>{
    console.log(item,index,array );
})

//or

function print(item){
    console.log(item);
}
arr.forEach(print)

  //just give reference don't call

  /* IMP: foreach does not return anything.  */
  /* let a = arr.forEach((item,index, array)=>{
    console.log(item,index,array )
    return index;
}) */



//Filter  
console.log("----------------------------- ");

let array= [1,2,3,4,5,6,7,8]
let x = array.filter((num)=>num>4)
let y = array.filter((num)=>{
    return num>4;
})
console.log(x);
console.log(y);

console.log("----------------------------- ");
 
//how to use foreach for filtering

newarr=[]
array.forEach((num)=>{
    if(num>4){newarr.push(num)}
});
console.log(newarr);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userbooks;
userbooks=books.filter((bk)=>(bk.genre=="History"))
userbooks=books.filter((bk)=>(bk.publish>=1995&&bk.genre=="History") )
console.log(userbooks);
