/* Datas are been classified into 2 types :-
(based on in which it is stored and how it is acceseed )
primitive(7) : string , boolean , numbeer, null, undefined , symbol, BigInt
non primitive(refence Type): arrays , objects, Functions 

!!! JavaScript is Dynamically Typed as variable types are not explicitly declared at compile time.
Instead, types are determined at runtime based on the values assigned to the variables.


Here there is no float 
*/
let a=Symbol("123")
let b=Symbol("123")
console.log(a);
console.log(b);
console.log(a==b);//though same we have typed 123  but it is till used as the same


/* bigNumber is a regular number, not a BigInt. 
The typeof operator will return "number" because JavaScript numbers are 64-bit floating point values, 
and even though the number you've assigned to bigNumber is quite large,
it is still treated as a regular number. */
let bigNumber= 123445567656754534n
console.log(typeof bigNumber);

let c=[1,2,3]
console.log(typeof c);//array is considered as objec
const myf = function() {
    console.log("Nihaal");
};


console.log(typeof(myf));


/* 
Stack (primitive): it copies the value and then passes to the variable
Heap (Non-Primitive): like pointers if we change value it gets reflected
*/
