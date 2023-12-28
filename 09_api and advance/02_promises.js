// // read from the documentation :-   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise 

// // A promise is an object representing the eventual comletion or failure of an asynchronous operation

// const promiseone = new Promise(function(resolve,reject){
//     //Do an async task
//     // DB calls, cryptography,network
//     setTimeout(function(){
//         console.log('async task is complete');
//         resolve() // its neccessary to write resolve() to connect it to .then 
//     },1000)
// })
// console.log(promiseone)  // promise pending here.
// // ab promise create ho chuka h to uska consumption krna h.
// // .then ka sidha connection h resolve k sath.
// promiseone.then(function(){    // this function automatically recieves an argument.
//   console.log("Promiseone consumed");
// })  


// // upar jo apan ne kiya usko eksath bhi kr sakte h bina promise ko variable m leke.
// new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("async task 2");
//         resolve()
//     },1000);
// }).then(function(){console.log("async 2 resolved")})

// // promise 3
// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"Ketan",age:19})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){

//     },1000)   
// })






// // *********************************************************************************************************************************************

// // new keyword is used with constructor(ex- promises) to call them
// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(function(){ console.log("async task is complete inside promise");},1000) 
//     resolve()   
// })


// promiseOne.then(function(){
// //     The callback to execute when the Promise is resolved.
// // Attaches callbacks for the resolution and/or rejection of the Promise 
// // @returns — A Promise for the completion of which ever callback is executed.
//    console.log("promise consumed ");
// })     

// new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("async task 2");
//         return resolve()
//     },1000);
// }).then(function(){console.log("async 2 resolved")})

// //promise three 
// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("Promise three async task");
//         resolve({username:"Ketan",age:19})
//     }, 1000);
// })

// promiseThree.then(function(user){
//      console.log (user.age)
// })


// const promiseFour =new Promise(function(resolve,reject){
//     setTimeout(() => {
//         let error = true;
//         if(error){ resolve({username:"Ketan",age:19})}
//         else(reject("Error : something went wrong."))
       
//     }, 1000);
// })

// const usernam = promiseFour.then(function(x){
//    console.log("promiseFour resolve .then ",x)
//     console.log(promiseFour)
//     return(x.username)
// })
// .catch(function(x){
//     console.log("catch",x)
//     console.log(promiseFour)
// })
// .finally(function(){console.log("done")})
// console.log("outer console.log of variable = promise.then :-",usernam)  // ye galat tarika h result ko variable m lene ka kyoki promise pending rahega best hoga chaining use kare .then.then

//catch hamesha .then k sath lagega ex  promiseFour.then().catch() jab reject hoga to catch k ander ka callback func. call hoga.
 
// const promiseFive =  new Promise(function(resolve,reject){
//     setTimeout(() => {
//         let error = true;
//         if(!error){ resolve({username:"promise five",age:19})}
//         else(reject(" 5. Error : something went wrong."))
       
//     }, 1000);
// })

// async await (zaroori nahi promise ko aap .then .catch se hi handle kare async await ka bhi use kr sakte h.)

//  async await syntax. it waits for the work to get done then only go ahead otherwise error.

// async function consumePromiseFive(){
//     try{
//         const response = await promiseFive   // await ko variable m hold karna padega. ( promise five ek object h )
//         console.log(response);
//     }
//     catch(error){
//         console.log(error);
//     }
 

// }  // async await error ko handle nhi karta. isliye pure ko try catch m likhenge
// consumePromiseFive()



// async function getAllUsers(){
//     try{
//         const response = await fetch('https://api.github.com/users/ketan-k10')
//         const data = await response.json()  //json me convert hone me bhi time lagta h to idhar bhi await likhna padega. vrna promise pending rahega.
//         console.log(data);

//     }catch(e){console.log("error")}
    
// }
// getAllUsers();



fetch('https://api.github.com/users/ketan-k10').then(function(response){   // its not neccessary but give an argument inside then function which it will recieve from fetch
     console.log("fetch.then",response)  // this response is in string format and not readable so convert in json format.
     return response.json()
}).then(function(data){
    console.log(data)
    console.log(data.name,data.login,data.public_repos)
}).catch(function(e){
    console.log("Error:- ",e)
}).finally(function(){
    console.log("Happy ending promises, fetch")
})