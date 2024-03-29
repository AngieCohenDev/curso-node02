// Types

let framework: string = "Angular";
const isProduction: boolean = true;
const PORT: number = 3000;
const styles: Array<string> = ['./css/style.css'];

const sayHello: Function = (name:string): string => `Hello ${name}`;

const algo:string = sayHello('Wakanda por siempre');
console.log(algo);
