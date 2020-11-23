class objectGenericClass<Type1, Type2 extends number>{
    constructor(public value:Type1, public value2:Type2){

    }
}
let array1:Array<number> = [1,2,3,4,5];
let array2: number[] = array1.slice(2,4);
console.log(array2);

let object1 = new objectGenericClass<String, number>("Something",200);
let object2 = new objectGenericClass<boolean, number>(true,200);