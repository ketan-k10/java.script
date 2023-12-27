// read from the documentation :-   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise 

// A promise is an object representing the eventual comletion or failure of an asynchronous operation

const promiseone = new Promise(function(resolve,reject){
    //Do an async task
    // DB calls, cryptography,network
    setTimeout(function(){
        console.log('async task is complete');
        resolve() // its neccessary to write resolve() to connect it to .then 
    },1000)
})
console.log(promiseone)  // promise pending here.
// ab promise create ho chuka h to uska consumption krna h.
// .then ka sidha connection h resolve k sath.
promiseone.then(function(){    // this function automatically recieves an argument.

  console.log("Promiseone consumed");
})  

// upar jo apan ne kiya usko eksath bhi kr sakte h bina promise ko variable m leke.
new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("async task 2");
        resolve()
    },1000);
}).then(function(){console.log("async 2 resolved")})

// promise 3
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Ketan",age:19})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){

    },1000)   
})