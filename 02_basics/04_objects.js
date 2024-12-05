const tinder_user = new Object() //singleton obj 

//non singleton obj : const tuser = {}

tinder_user.id="nihaalT"
tinder_user.name="nihaal"
tinder_user.loggedin= false;

//console.log(tinder_user);

const regularUser={
    email: "nihaaltapasi@gmail.com",
    fullName: {
        userName: {
            firstName: "Nihaal",
            lastName: "Tapasi"
        }
    }
}

// console.log(regularUser.fullName.userName.firstName);


const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "a", 4: "b"}
// const obj3 = {...obj1, ...obj2} //spreading operator

// const obj3 = Object.assign(obj1, obj2)


const obj3 = Object.assign({} ,obj1, obj2)
// {} --> target hai & obj1, obj2 --> source : tho sara empty meh jayega obj1 and obj2 

//agar ham assign(obj1, obj2) tho obj1 = {obj1 , obj2 } Therefore there is changes in obj1 also 
console.log(obj3);

console.log(Object.keys(tinder_user));//returns an array
console.log(Object.values(tinder_user));//returns an array
console.log(Object.entries(tinder_user));//returns an array
console.log(tinder_user.hasOwnProperty("loggedi n"));

const course = {
    course : "udemy",
    price : "999",
    courseinstructor : "Charith"
}
const {courseinstructor : instructor}=course;//Destructure of Obj : !!used in React 
console.log(instructor);
