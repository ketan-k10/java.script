const coding = ["js", "ruby", "java", "python", "cpp"]               // Array

// for each syntax is like      arrayname.foreach(function (){})  // this function is call back this function will be executed for each element in an array, and function have no name.and it will take elemnt as parameter.
function welcome(val){
    console.log(`Value is(global function): `,val);
}
coding.forEach(function (val){console.log(`value is: `,val)})  // or
coding.forEach((val)=>console.log(`value is(arrow fun): `,val));   //used arrow function or
coding.forEach(welcome);  // all three are similar but in this case welcome is correct welcome() is wrong.




coding.forEach( (item, index, arr)=> {     // for each help have access to item, index, and full array
    console.log(item, index, arr);
} )

const myCoding = [                                                // array with object as elements. use case of for each
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )



const map = new Map()                                //ForEach in map                   // Map
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

map.forEach((val,Key)=>console.log(`value is ${val} and key is ${Key}`)) // function take parameter as value,key