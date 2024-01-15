class Pizza {
    public tomate: boolean = false;
    public cheese: string = '';
    public bacon: boolean = false;
    public otherIngre: Array<string> = [""];

    setCheese(cheese: string): Pizza{
        this.cheese = cheese;
        return this;
    }

    setBacon(): Pizza{
        this.bacon = true;
        return this;
    }

    setOtherIngre(ingredientes: string[]): Pizza{
        this.otherIngre = ingredientes;
        return this;
    }

    build(){
        return this;
    }
}

const pepperoniP: Pizza = new Pizza();
pepperoniP
.setBacon()
.setCheese("Parmezano")
.setOtherIngre(["Peperoni", "Albaca"])
.build()

console.log(pepperoniP);
