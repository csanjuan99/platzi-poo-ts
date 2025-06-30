export class Auto {
    brand: string;
    model: string;
    year: number;

    constructor(
        brand: string = "Default Brand",
        model: string = "Default Model",
        year: number = 2020
    ) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    public print(): string {
        return `${this.brand} ${this.model} (${this.year})`;
    }

    public setBrand(brand: string): void {
        this.brand = brand;
    }


}

// const auto = new Auto();
const custom = new Auto("Toyota", "Corolla", 2021);


// console.log('Defecto: ', auto);
// console.log('Personalizado: ', custom);

console.log(custom.print()); // -> Toyota Corolla (2021)

custom.setBrand("Honda");

console.log(custom.print()); // -> Honda Corolla (2021)
