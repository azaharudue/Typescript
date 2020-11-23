"use strict";
var Tree = /** @class */ (function () {
    function Tree(branch, leaf, name) {
        this.branch = branch;
        this.leaf = leaf;
        this.name = name;
        this.branch = branch;
        this.leaf = leaf;
    }
    Tree.prototype.moveLeaf = function () {
        console.log(this.leaf + " of " + this.branch + " is moving ");
    };
    return Tree;
}());
// If we try to add name here it'll show error because it's a protected property.
var tree1 = new Tree("branch1", "green leaf");
tree1.moveLeaf();
