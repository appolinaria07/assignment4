// IMPORT THE MODULE
import {add, substract, multiply, divide} from "./modules/calculator.js";


// COLLECT NUMBER 1, NUMBER 2, AND OPERATION FROM THE USER
let num1, num2, mathOperation;                             

/* collecting numbers from users here will make them enter this info 2 times, since the do-
while loop asks for users input at least 1 time before checking the while condition 
*/

// CHECK TO SEE WHAT OPERATION THEY'RE USING
do {
    num1 = Number(prompt("Please enter a number"));
    num2 = Number(prompt("Please enter another number"));
    mathOperation = String(prompt("Please enter what kind of mathematical operation you would like to perform on the numbers? + (add) OR - (substract) OR * (multiply) OR / (divide)."));
} while (mathOperation !== "+" && mathOperation !== "-" && mathOperation !== "*" && mathOperation !== "/") 

// CALL THE APPROPRIATE FUNCTION
switch (mathOperation) {
    case "+":
        alert(add(num1, num2));
        break;
    case "-":
        alert(substract(num1, num2));
        break;
    case "*":
        alert(multiply(num1,num2));
        break;
    case "/":
        alert(divide(num1, num2));
        break;
}