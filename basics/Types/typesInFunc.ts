function calc(num1: number, num2: any): number {
    let sum:number = num1+num2;
    return sum;
}
function stringFunc(): string{
  return "I am  a String";    
}
calc(4,5);
let universal: ()=> string;
universal = stringFunc;
console.log(universal());

// let universal = stringFunc;
// let NoFunc = calc;
// console.log(NoFunc(4,5));
// universal();