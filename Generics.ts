// function getValue(value: unknown) {
//     return value;
// }

function getValue<T>(value: T) {
    return value;
}

class Dog {

    public name: string

    constructor(_name: string) {
        this.name = _name;
    }

    public bark(): string {
        return `${this.name} says Woof!`;
    }
}

const firulais = new Dog('Firulais');

const value: number = getValue<number>(12);
const bark = getValue<Dog>(firulais).bark();
console.log(bark)
