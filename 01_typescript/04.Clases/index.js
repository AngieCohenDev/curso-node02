"use strict";
class Pizza {
    constructor() {
        this.tomate = false;
        this.cheese = '';
        this.bacon = false;
        this.otherIngre = [""];
    }
    setCheese(cheese) {
        this.cheese = cheese;
        return this;
    }
    setBacon() {
        this.bacon = true;
        return this;
    }
    setOtherIngre(ingredientes) {
        this.otherIngre = ingredientes;
        return this;
    }
    build() {
        return this;
    }
}
const pepperoniP = new Pizza();
pepperoniP
    .setBacon()
    .setCheese("Parmezano")
    .setOtherIngre(["Peperoni", "Albaca"])
    .build();
console.log(pepperoniP);
