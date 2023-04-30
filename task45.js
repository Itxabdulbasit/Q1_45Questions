"use strict";
function makeCar(manufacturer, model, ...properties) {
    const car = { manufacturer, model };
    for (const [propertyName, propertyValue] of properties) {
        car[propertyName] = propertyValue;
    }
    return car;
}
const myCar = makeCar("Toyota", "Corolla", ["color", "blue"], ["year", 2022]);
console.log(myCar);
