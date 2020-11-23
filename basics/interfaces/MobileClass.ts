class MobileClass implements MobileInterface {
    brand: string = "";
    model: string = "";
    imei: number = 0;

    printMobileData(brand: string, model: string) {
        console.log(`I have a ${brand} model ${model}`);

    }
    addModel(model: string, brand: string) {
        console.log(`My model ${model}`);
        this.model =model;
        this.brand = brand;
        this.imei = 1548944848488;

    }
    printNewData():void{
        console.log(`Model ${this.model} has a brand ${this.brand} with IMEI ${this.imei}`);
        
    }
}

let mobileObject = new MobileClass();
mobileObject.printMobileData("Huwai","P5");
mobileObject.addModel("A5", "Apple");
mobileObject.printNewData();