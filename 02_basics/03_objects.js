//singleton

//object literals

const JsUser ={name:"Ketan",age:"19",object:{1: "A ", 2: "B "}, "full name": "ketan Joshi"}// use curly brackets for object.object is like dict in python have keys and values.

console.log(JsUser.name);
console.log(JsUser["name"]);

//difference between both is that we cant access "full name" using dot(.) as " " is there in between so we have to use square.

// console.log(JsUser."full name");     //will give error .
console.log(JsUser["full name"]);