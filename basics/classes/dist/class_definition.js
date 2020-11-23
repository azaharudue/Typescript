var Tree = /** @class */ (function () {
    function Tree(branch, leaf) {
        this.branch = branch;
        this.leaf = leaf;
        this.branch = branch;
        this.leaf = leaf;
    }
    Tree.prototype.moveLeaf = function () {
        console.log(this.leaf + " of " + this.branch + " is moving ");
    };
    return Tree;
}());
var tree1 = new Tree("branch1", "green leaf");
tree1.moveLeaf();
