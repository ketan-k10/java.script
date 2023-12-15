const tinderUser =new Object()  //empty object and its called singleton object
console.log(tinderUser);

const TinderUser = {}; //empty object /non singelton object.
console.log(TinderUser);

TinderUser.id="123abc";
TinderUser.name="Ketan";
TinderUser.isloggedin =false;
console.log(TinderUser);


const regularUser ={
    email:"k10@google.com",
    data:{
        age:19,
        fullname:{
            firstname:"Ketan",//we can for as many nested objects as we want.
            lastname:"joshi"
        }
    }
}
console.log(regularUser.data.fullname.lastname);//can access element of nested object using dot(.)


const obj1 ={1:"a",2:"b"};
const obj2 ={3:"a",4:"b"};

const obj3 ={obj1,obj2};// we can combine objects in new object.
const obj4 ={...obj1,...obj2}; //all three are same.(...)is used to spread
const obj5 =Object.assign(obj1,obj2);//in assign method first argument act as target as in this case it is obj1 so changes will be done and saved in obj1. and rest will act as source.
const obj6=Object.assign({},obj1,obj2);//this is same as above but it confirms that obj 6 will be{}.// here we first give empty{} so that obj1 does not get affected and target is {}.
console.log("1  ",obj1);
console.log("2  ",obj2);
console.log("3  ",obj3);
console.log("4  ",obj4);
console.log("5  ",obj5);
console.log("6  ",obj6);

// spread is best to use .(...).

//we can have object inside an array.
const User  = [{name:"Ketan",age:"19"},"hello",2023];
console.log(User[0].name);//and to access obj inside array use array indexing to get object than use dot to access its keys.

console.log(TinderUser);
console.log(Object.keys(TinderUser));//output value datataype is array. all keys of object stored in array.
console.log(Object.values(TinderUser));
console.log(TinderUser.hasOwnProperty('isLoggedin'));//(hasOwnProperty)is used to check property object m h ya nhi.// result will be in boolean true or false.
