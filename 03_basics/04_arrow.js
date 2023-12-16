const user ={
    website: "Ketan.com",
    price:999,
    welcome: function(){
        console.log(`Hii welcome to ${this.website}`);//this current context ko refer karne ke liye use karte h.
        console.log("inside function which is inside object key, this is : ", this)
    }
    
}

user.welcome()

console.log("outside scope this is: ",this);

function chess(){
    console.log("Inside normal function this is: ",this);
}
chess()

const arrow = ()=>{
    let username ="ketan"
    console.log("inside arrow function this: ",this);
}
arrow()

// Arrow function sytanx is like ()  =>  {}  and we can store them in some variables.



const addTwo = (num1, num2) => {
    return num1 + num2
}//if we use curly braces and want to return then we have to use return keyword.

// const addTwo = (num1, num2) =>  num1 + num2   // it will automatically return without using keyword return .

// const addTwo = (num1, num2) => ( num1 + num2 )//this also do the same but if we want to return object or else we use ()

const addtwo = (num1, num2) => ({username: "hitesh"})


console.log(addtwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach(()=>{})// like this we can use arrow function