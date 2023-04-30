interface Car {
    manufacturer: string;
    model: string;
    [propName: string]: any;
  }
  
  function makeCar(manufacturer: string, model: string, ...properties: [string, any][]): Car {
    const car: Car = { manufacturer, model };
    for (const [propertyName, propertyValue] of properties) {
      car[propertyName] = propertyValue;
    }
    return car;
  }
  
  const myCar = makeCar("Toyota", "Corolla", ["color", "blue"], ["year", 2022]);
  console.log(myCar);
  