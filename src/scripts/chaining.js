// Requirements

const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

//======================LONG CODE===================================//
// Sort the numbers in descending order (10, 9, 8, 7, etc).
integers.sort((a,b)=>b-a)
console.log("sorted integers", integers);

// Remove any integers greater than 19.
let filtered = integers.filter((item) => item < 19)
console.log("filtered integers", filtered);

// Multiply each remaining number by 1.5 and then subtract 1.
let mapped = filtered.map(item => item*1.5 - 1)
console.log(mapped)

// Then output (either in the DOM or the console) the sum of all the resulting numbers.
let reduced = mapped.reduce((total, current) => total+current)
console.log(reduced)


//===================REDUCED CODE=============================//

// Using one single line of JavaScript code, complete the previous tasks on the array of integers below.
const combined = integers.sort((a,b)=>b-a).filter((item) => item < 19).map(item => item*1.5 - 1).reduce((total, current) => total+current)

console.log(combined)


