//STEP 1

function halfNumber(num) {
   "use strict";
    let result = num / 2;
    return `Half of ${num} is ${result}.`;
}
console.log(halfNumber(Math.floor(Math.random()*100 + 1)));



//STEP 2

// function squareNumber(num) {
//    "use strict";
//     let result = num * num;
//     return `The result of squaring the number ${num} is ${result}.`;
// }
// console.log(squareNumber(Math.floor(Math.random()*100 + 1)));


//STEP 3

// function percentOf(num1, num2) {
//     "use strict";
//     let result = Math.abs(num1 * 100 / num2);                      
//     return `${num1} is ${result.toFixed(1)}% of ${num2}.`;
// }
// let num1 = Number(prompt("Enter a number"));
// let num2 = Number(prompt("Enter one more number"));
// console.log(percentOf(num1, num2));


//STEP 4

// function findModulus(num1, num2) {
//     "use strict";
//     let result = num1 % num2;
//     return `${result} is the modulus of ${num1} and ${num2}.`;
// }
// console.log(findModulus(Math.floor(Math.random()*100 + 1), Math.floor(Math.random()*100 +1)));


//STEP 5

// function calculate() {
//     let total = 0;
//     for (let i = 0; i < nums.length; i++) {
//         nums[i] = parseInt(nums[i], 10);
//         total += nums[i];
//     }
//     return total;
// }
// let str = String(prompt("Enter any amount of numbers separated by commas."));
// let nums = str.split(",");
// console.log(calculate(nums));
