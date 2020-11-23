class Tree{ 
    constructor(public branch: string, private leaf:string,protected name ?: string ){
    this.branch = branch;
    this.leaf = leaf;
    }
    moveLeaf(){
        console.log(`${this.leaf} of ${this.branch} is moving `);
        
    }
}

// If we try to add name here it'll show error because it's a protected property.
let tree1 = new Tree("branch1", "green leaf");

tree1.moveLeaf();