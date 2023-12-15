function hello(){
    console.log("hello world");
}

// function its syntax is like function keyword then its name() then function scope.
//no need to give the type  of arguments you are giving.
function addition(num1,num2){
             console.log("inside function  ",num1 + num2);
}
addition(4,6);// the value you pass during function call is called argument here 4 and 6 are arguments and num1 and num2 are parameters.
addition(4,"6");
const result = addition(7.57,9);
console.log("result ", result);

//function return k niche ka code run nahi karega.

function login(username){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return`${username} just logged in`;
}
console.log(login("Ketan"));
console.log(login());// in output it will give undefined bcuz 1 arg required but 0 given. so we handle this inside function using conditions.
//we can also give default value in function parameter .
