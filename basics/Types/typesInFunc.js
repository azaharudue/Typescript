"use strict";
function calc(num1, num2) {
    var sum = num1 + num2;
    return sum;
}
function stringFunc() {
    return "I am  a String";
}
calc(4, 5);
var universal;
universal = stringFunc;
console.log(universal());
// let universal = stringFunc;
// let NoFunc = calc;
// console.log(NoFunc(4,5));
// universal();
