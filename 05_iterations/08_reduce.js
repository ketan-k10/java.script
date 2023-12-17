// useed in shopping cart and similar cases.

const array = [1,2,3,4,5];

// example we have to reduce it to 1+2+3+4+5

// syntax is like (dot).reduce() //reduce also take callback function
//  .reduce((accumulator,current value)=> return (then outside function but inside reduce use comma then write initial value you want to give in accumulator))    
const initialValue = 0;
const sum = array.reduce((accumulator, currentvalue) => {return accumulator + currentvalue},initialValue);

console.log(sum)





/// Another example.// see output and understand

const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)

console.log(myTotal);

const mytotal = myNums.reduce( (acc, curr) => acc+curr, 0)// same code we can write in one line.

console.log(mytotal);


//  shoping cart example.=>
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]


const PriceToPay = shoppingCart.reduce((acc,item)=> {return acc + item.price},0)
console.log(PriceToPay);
