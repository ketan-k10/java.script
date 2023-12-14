//you can see more methods of array in console properties

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

console.log(marvel_heros.push(dc_heros));// push will add other array as element.
console.log(marvel_heros); 
console.log(marvel_heros[3][2]);//to access element array inside array.

marvel_heros.pop();
const allHeros = marvel_heros.concat(dc_heros);// concat add another array elemnts not that array as elements but used for two arrays
//concat will be done in new array will not save in original.
console.log(allHeros);

// we use spread(...) to concat multiple arrays.

const all_new_heros =[...marvel_heros, ...dc_heros];//(...)means spread and add in array and will save in original array.
console.log(all_new_heros);



const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity);// this will spread all array inside array till the depth we give as in this case it is infinity.
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))//hitesh is not array so it will give false 
console.log(Array.from("Hitesh")) // will form an array of given string considering each characte ras element.
console.log(Array.from({name: "hitesh"})) // interesting will give empty array. you have to specify whether you want array of keys or values.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));//we can form an array like this using array.of().