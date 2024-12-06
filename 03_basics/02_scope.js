var c = 4
const b = 5
if (true){
    let a = 5;
    const b = 4;
    var c = 3;
   // console.log(b);
    
}
// console.log(c);
// console.log(b);

//-----------IMP Case--------

console.log(add_one(5));

function add_one(num){
    return num + 1;
}

console.log(add_two(3));

const num2 = function add_two(num){
    return num + 2;
}
//Error for 2nd one !!!!! as declaratoin and hold in a variable ; Hoisting 