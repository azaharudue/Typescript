var myNameSpace;
(function (myNameSpace) {
    myNameSpace.name = "Azahar Hossain";
    function print() {
        return myNameSpace.name;
    }
    myNameSpace.print = print;
})(myNameSpace || (myNameSpace = {}));
///<reference path = "../Namespaces/module1.ts"/>
console.log(myNameSpace.name);
