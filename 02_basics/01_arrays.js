//arrays 

const myArr = [0,1,2,3,4,5]

//array in javascript are mutable 

console.log(myArr[2])

//array in javascript form shallow copy i.e changes saved in original array.

const myHeros = ["ketan", "joshi", "k10"]
const myHeros2 = new Array("shaktiman", "naagraj")

console.log(myHeros2);


//array methods

console.log(myArr.push(7))
console.log(myArr)
console.log(myArr.pop())
console.log(myArr)


console.log(myArr.unshift(0))
console.log(myArr)

console.log(myArr.unshift(9))
console.log(myArr)
// add element in array at 0 index not good to use as it is long and  time taking to change index of every number 

console.log(myArr.shift(0))
console.log(myArr)

//shift removes the first element of an array


// methods like asking question
//includes(),indexof()

console.log(myArr.includes(4));
console.log(myArr.indexOf(9));/// -1 means not found.

console.log(myArr.join());
const newArr = myArr.join(); // this join() bind the elements of array in string eith comma seperated 
console.log(myArr);
console.log(newArr);



//  slice,  splice

const arr1 = myArr.slice(1,3);  // index 1 included and 3 excluded
console.log("A ",arr1);
console.log("A ",myArr);
const arr2 = myArr.splice(1,3);// index 1 and 3 both included and that are removed from original array.
console.log("B ",arr2);   
console.log("B ",myArr);   