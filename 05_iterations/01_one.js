//for

for(let i=0;i<4;i++){
    console.log("i is:  ",i);
}

let rows=3;
let cols=3;
let twoDarr = new Array(rows);
for(let i=0;i<rows;i++){
    twoDarr[i] = new Array(cols);
}     //Created empty 3*3 matrix in javascript concept of 2D array.
console.log("Empty 3*3 matrix: ",twoDarr);



for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
        twoDarr[i][j]=i+j;
    }
}//taking value inside 2d array.
console.log(twoDarr);



//Break and continue;

for (let index = 0; index <= 20; index++) {
     if(index==5){
        console.log(`Detected 5`);
        break;
     }
     console.log(`valueof i is: ${index}`);//did not run
    
}

for (let index = 0; index <= 7; index++) {
     if(index==5){
        console.log(`Detected 5`);
        continue;
     }
     console.log(`valueof i is: ${index}`);//will run for 6 and 7 but not for 5.
    
}

