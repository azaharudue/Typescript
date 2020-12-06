var objectGenericClass = /** @class */ (function () {
    function objectGenericClass(value, value2) {
        this.value = value;
        this.value2 = value2;
    }
    return objectGenericClass;
}());
var array1 = [1, 2, 3, 4, 5];
var array2 = array1.slice(2, 4);
console.log(array2);
var object1 = new objectGenericClass("Something", 200);
var object2 = new objectGenericClass(true, 200);
