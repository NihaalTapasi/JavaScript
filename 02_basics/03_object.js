//Obje Literals !!!

const mySym = Symbol("24eje1076")
const JSUser = {
    name : "Nihaal",
    "Full Name" : "Nihaal Tapasi",
    age : 20,
    IIT : 'ISM',
    [mySym] : '24je1076',//imp : interviewer wil ask to use sym 
    branch : 'AGL', 
    email : "24je1076@iitism.ac.in",
}
console.log(JSUser.name);//Method1 
console.log(JSUser["Full Name"]);//Method 2
console.log(JSUser["name"]);
console.log(JSUser);
console.log(typeof(JSUser[mySym]));

//Object.freeze(JSUser)
JSUser.email = 'nihaaltapasi@gmail.com';

JSUser.greeting= function(){
    console.log("Hello Nihaal");
}

console.log(JSUser.greeting());

JSUser.greetingTwo = function(){
    console.log(`Hi ${this["Full Name"]}, Your age is ${this["age"]}`);//this is use to signify JS User OBJ
}
console.log(JSUser.greetingTwo());

console.log(JSUser);
