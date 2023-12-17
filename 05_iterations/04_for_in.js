//  (for in) in object and array and map.

const myObject = {                                          // Object.
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}


for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);   //   // if we use ( for in ) then myObject is iterable and we can access keys but in ( for of ) case its not iterable error.
}

const programming = ["js", "rb", "py", "java", "cpp"]                   //  Array.

for(const key in programming){
    console.log(`In given Array At index ${key} the value is ${programming[key]}`);    // key will give us index when we use ( for in ) for array 
}

const map = new Map()                                               // Map
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const [key,value] in map) {
    console.log(key,value);         // nothing will be printed for ( for in ) in map because map is not iterable.
}




