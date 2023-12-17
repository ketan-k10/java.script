// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]               // Array.

for (let num of arr){
    console.log(num);
}

const greetings = "Hello world!"         // String.

for (const greet of greetings){
    console.log(`Each char is ${greet}`);// will iterate each element of given string
}

//                                       // Maps


const map = new Map()
map.set('INd', "India")
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")


// //map contain key value pair in ordered manner first cum first, 
// //in map key is unique.

console.log(map);

for (const key of map){
    console.log(key)//  this will not only print key but pair of key value together in array.
}

for (const [key,value] of map){
    console.log(key ,` :=> `,value);
}


const myObject = {                                       // Objects.
    game1: 'NFS',
    game2: 'Spiderman'
}

// for(const [key,value] of myObject){
//     console.log(key,value);                 //    Error  myObject is not iterable.
// }
    
// error because object contain key value pair in unordered manner.