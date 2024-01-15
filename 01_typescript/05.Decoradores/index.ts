// Decoradores

function selfDriving(constructorFunctions: Function){
    constructorFunctions.prototype.selfDriving = true;
}

@selfDriving
class Car {
    private brand: string;
    constructor(brand: string){
        this.brand = brand;
    }
}

const nissan: Car = new Car('Nissan');
console.log(nissan.selfDriving);
