//singleton

//object literals
const mySym = Symbol("key1");//declaring symbol.

const JsUser ={name:"Ketan",
     age:"19",
     object:{1: "A ", 2: "B "}, 
     "full name": "ketan Joshi",
      mySym:"mykey1",//directly we cant use symbol as key its type is string.
      [mySym]: "mykey1",//using symbol as key using square brackets.
      age: 18,
      location: "Udaipur",
      email: "Ketan@google.com",
      isLoggedIn: false,
      lastLoginDays: ["Monday", "Saturday"]}// use curly brackets for object.object is like dict in python have keys and values.

console.log(JsUser.name);
console.log(JsUser["name"]);

//difference between both is that we cant access "full name" using dot(.) as " " is there in between so we have to use square.

// console.log(JsUser."full name");     //will give error .
console.log(JsUser["full name"]);

console.log(JsUser.mySym);
console.log(typeof JsUser.mySym);


JsUser.email="k10@google.com";//it will update the value of key if already present.
//Object.freeze(JsUser);//we can freeze the object so no change can be done by using object.freeze()
JsUser.email="aaaa";//no error is there but values inside freezed object will not change.
console.log(JsUser);



JsUser.greeting = function(){
    console.log(`Hello JS User ${this.name}`);//accessing object keys using this.
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());
