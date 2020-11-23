var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var plant = /** @class */ (function (_super) {
    __extends(plant, _super);
    function plant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    plant.prototype.print = function () {
        plant1.name = "NewPlant";
        console.log(this.name + " has " + this.branch);
    };
    return plant;
}(Tree));
var plant1 = new plant("Branch2", "Red leaf");
plant1.moveLeaf();
plant1.print();
