class Tree{ 
constructor(public branch: string, private leaf ?:string,protected name ?: string ){
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

class plant extends Tree{
    print(){
        
        plant1.name = "NewPlant";
        console.log(this.name+ " has "+this.branch );
        
    }

}
let plant1 = new plant("Branch2","Red leaf");
plant1.moveLeaf();
plant1.print();
// From Abstract class no instances can be created, but from child class of abstract class can have instances

