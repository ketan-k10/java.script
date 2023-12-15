function cartprice(...num1){
    return num1
}

console.log(cartprice(200,300,400,590));
//multiple argument given but 1 required. so we use rest operator(...)
//(...)in function parameters means store the multiple arguments given in bundle(array).now we can apply for loops on it.
// generaly used in cart system or ecommerse websites.


const user={
    username:"Ketan",
    Product:"Mobile",
    price:"29000"
}


function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));//both eay are same.