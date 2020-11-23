"use strict";
var mobile = {
    brand: "Samsung",
    imei: 7845965845786956,
    model: "S6",
    addModel: function () {
        this.model = "S6";
    }
};
function mobile1(mobile) {
    mobile.brand = "Apple";
    mobile.model = "i5",
        mobile.imei = 1585484865984848;
    console.log("This " + mobile.model + " is from " + mobile.brand);
}
mobile1(mobile);
