// Instead of using multiple method for various types of variables or return values ,
// we can use generics type
function displayData<TYPE> (someData: TYPE){
    return someData;
}

console.log(displayData(10222));
console.log(displayData(true));
