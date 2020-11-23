"use strict";
var MobileClass = /** @class */ (function () {
    function MobileClass() {
        this.brand = "";
        this.model = "";
        this.imei = 0;
    }
    MobileClass.prototype.printMobileData = function (brand, model) {
        console.log("I have a " + brand + " model " + model);
    };
    MobileClass.prototype.addModel = function (model, brand) {
        console.log("My model " + model);
        this.model = model;
        this.brand = brand;
        this.imei = 1548944848488;
    };
    MobileClass.prototype.printNewData = function () {
        console.log("Model " + this.model + " has a brand " + this.brand + " with IMEI " + this.imei);
    };
    return MobileClass;
}());
var mobileObject = new MobileClass();
mobileObject.printMobileData("Huwai", "P5");
mobileObject.addModel("A5", "Apple");
mobileObject.printNewData();
