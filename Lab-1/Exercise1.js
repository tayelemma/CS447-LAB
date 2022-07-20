/**
 * Write the necessary Node script to make this code work for all arrays: [1,2,3,4,5,6,7,8].even(); // [2,4,6,8] [1,2,3,4,5,6,7,8].odd(); // [1,3,5,7] Test your code in Node.JS CLI
 */

let arr = [1,2,3,4,5,6,7,8];

Array.prototype.even = function (){
    let arr = this;
    let result= arr.filter(item => item %2===0); 
    return result;
}

console.log(arr.even());//[2,4,6,8]




Array.prototype.odd = function (){
    let arr = this;
    let result = arr.filter(item => item %2 != 0)
    return result;
}
console.log(arr.odd()); // [1,3,5,7] 