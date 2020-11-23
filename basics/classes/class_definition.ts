class Tree{ 
    constructor(public branch: string, private leaf:string ){
    this.branch = branch;
    this.leaf = leaf;
    }
    moveLeaf(){
        console.log(`${this.leaf} of ${this.branch} is moving `);
        
    }
}

let tree1 = new Tree("branch1", "green leaf");

tree1.moveLeaf();