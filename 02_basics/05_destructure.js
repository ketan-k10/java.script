//destructuring of objects.

const Course ={
    coursename :"Chai aur code Javascript",
    price:"999",
    courseinstructor:"Hitesh"

}

const {price: value} =Course;// this syntax helps to access price derectly using price intead of using object.(dot)price.
//syntax is like const {property : name you want to give in global} = object. 
console.log(value);


// { 
//     "name":"Ketan",
//     "age":"19",
//     "college":"IIIT Pune"
// }
//This is treated as JSON to get an Apis 
//We can get apis in form of array
//JSON  is  javascript object notation.
[
   {},
   {},
   {},
]