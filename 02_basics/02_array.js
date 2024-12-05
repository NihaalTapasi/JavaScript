const mhero = ['ironman','thor','spiderman'] 
const dc = ['superman','flash','batman']


const  x = mhero.concat(dc)//concat gives a new array does not do any changes in the older array 
console.log(x);

// ...  spread operator !! like glass spreading breaks array into each elements  
const all_new_hero = [...mhero, ...dc]
console.log(all_new_hero);


mhero.push(dc)//pushes in the existing array 
console.log(mhero);


const anarray= [1,2,3,[4,5,6],7,[4,6,7],8,9]
const another_array = anarray.flat(Infinity)//get flat like me !!
console.log(another_array);

console.log(Array.isArray("Nihaal"));//Nihaal is an array
console.log(Array.from("Nihaal"));
console.log(Array.from({name:"hi"}));//we have to specify if we want to use key or values as array. 
