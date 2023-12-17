const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumbers.map((item)=>item*10)

console.log(newNums)

// chaining concept using .(dot)map.map.map.filter.map  like this we can do as much chaining as we want.

const news = myNumbers.map((item)=>item*10).map((item)=>item*10).filter((item)=>item>300)

//filter is like used for checking condition true or false

console.log(news)

//another example of chaining.
const Nums = myNumbers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(Nums);