interface MobileInterface {
    brand: string;
    model: string;
    imei: number;
    addModel(model:string, brand:string):void;
}
const mobile : MobileInterface = {
    brand:"Samsung",
    imei: 7845965845786956,
    model: "S6",
    addModel(){
        this.model = "S6";
    }
};
function mobile1(mobile:MobileInterface){
    mobile.brand = "Apple"
    mobile.model = "i5",
    mobile.imei= 1585484865984848
    console.log(`This ${mobile.model} is from ${mobile.brand}`);
}
mobile1(mobile);