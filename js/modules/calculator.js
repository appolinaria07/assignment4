// ADD A PRIVATE FUNCTION CALLED CALCULATE
// I wasn't sure why we needed this calculate function so I didn't add it


// ADD FOUR PUBLIC FUNCTIONS BELOW
// ADD FUNCTION
const add = function(x, y) {
    return x + y;
}; 


// SUBTRACT FUNCTION
const substract = function(x, y) {
    return x - y;
};


// MULTIPLY FUNCTION
const multiply = function(x, y) {
    return x * y;
};


// DIVIDE FUNCTION
const divide = function(x, y) {
    return (x / y).toFixed(2);
};

// EXPORT THE FOUR PUBLIC FUNCTIONS
export {add, substract, multiply, divide};