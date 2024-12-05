let name="Nihaal Tapasi"
let crepo=50
console.log(name + " has "+ crepo+" repositories."); //not recomended 
console.log(`Hello My name is ${name} and my rep count is ${crepo}`);//backticks string interpretations


const gameName = new String('Nihaal-Tapasi')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());//() is imp to use the toUpperCase
console.log(gameName.charAt(2));//same as line 8
console.log(gameName.indexOf('n'));//note if the letter is not present then -1 will be the output. It is case sensitive
console.log(gameName.indexOf('N'));

let nstring = gameName.substring(-2,5)
console.log(`${nstring}`);//does not include 5th index

let astring = gameName.slice(-4,7)
console.log(`${astring}`);

console.log(gameName.split('-'))//similar to python 

