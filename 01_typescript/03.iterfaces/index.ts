// Interfaces

interface IAnimal {
    name: string;
    color: string;
};

const dog: IAnimal = {
    name: 'Kirara',
    color: 'Azul turqui'
};

interface onInit {
    ngOnInit(): void;
}

class MyComponent implements onInit{
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
}