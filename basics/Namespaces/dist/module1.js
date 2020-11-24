var myNameSpace;
(function (myNameSpace) {
    myNameSpace.name = "Azahar Hossain";
    function print() {
        return myNameSpace.name;
    }
    myNameSpace.print = print;
})(myNameSpace || (myNameSpace = {}));
