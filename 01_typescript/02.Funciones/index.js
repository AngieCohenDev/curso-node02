"use strict";
// Functions
function sum(z, b) {
    return z + b;
}
function mathOpe(callback, a, b) {
    return callback(a, b);
}
const resulatdo = mathOpe((a, b) => a + b, 5, 10);
console.log(resulatdo);
