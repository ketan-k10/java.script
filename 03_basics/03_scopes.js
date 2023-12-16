//   {} curly braces in js means scope. 
var c = 700
if (true) {
    let a = 10
    const b = 20
    var c = 25// var will overwrite its previous value with the value inside scope
    // console.log("INNER: ", a);
    
}

// console.log(a);// cant accesss outside its scope.
//console.log(b);
console.log(c);// c is of var type so the value inside scope willl overwrite it s previous values


function one(){
    const username = "Ketan"

    function two(){
        const website = "youtube"
        console.log(username);//can access outer scope variables in nested functions.but not vice versa.
    }
     //console.log(website);// error website is not defined. outside scope

     two()

}

one()

if (true) {
    const username = "Ketan"
    if (username === "Ketan") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);//same error/
}

// console.log(username);//same scope error



console.log(addone(5))

function addone(num){
    return num + 1
}
//*********************************interesting case*******(hoisting)*********** */
addTwo(5)//check the error//Cannot access 'addTwo' before initialization.
const addTwo = function(num){
    return num + 2
}
