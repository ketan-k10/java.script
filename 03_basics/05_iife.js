// iife means immediately invoked function expression(IIFE)
// global scope ke pollution se dikkat hoti h kai bar to pollution ko hatane ke liye iife ka use karte h.

//syntax is  bracket and function inside  then again bracket (function)(). this function will immediately get invoked(called)
//but isko pata nhi h rokna kaha h so we use semicolon (function)();
(function chess(){
    console.log(`DB connected`);
})();//This is named iife




((name)=>{
    console.log(`hiii ${name} how are you!!`)
})("ketan");//this is iife without name and parameter.
