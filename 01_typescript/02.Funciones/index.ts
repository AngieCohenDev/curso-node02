// Functions

function sum(z: number, b: number): number{
    return z + b;
}

function mathOpe(callback: Function, a: number, b: number): number {
    return callback(a,b);
}

const resulatdo: number = mathOpe((a: number, b: number): number => a + b, 5,10);

console.log(resulatdo);
