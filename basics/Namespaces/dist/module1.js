var myNameSpace;
(function (myNameSpace) {
    myNameSpace.name = "Azahar Hossain";
    function print() {
        return myNameSpace.name + " is my name";
    }
    myNameSpace.print = print;
})(myNameSpace || (myNameSpace = {}));
