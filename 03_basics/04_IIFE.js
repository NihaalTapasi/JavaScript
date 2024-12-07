//Immediately Invoked Function Expressions (IIFE)

(function chai(name) {
    console.log(`DB Connected ${name}`);
    
})("Nihaal");
//          ˆ
//          |
//!!Sometimes to there will be a error if ; is not used as it will not know when to terminate for the execution of 2 IIFE !!!



//()()
//1st () -->   function defination 
//2nd () -->   function execution 
//Done becuase  there will be pollution from global scope so inorder to avoid it we do IIFE :. immmitedately we call the function after decleration  


