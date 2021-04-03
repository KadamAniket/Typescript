class Animal {
    private name: string;
    public constructor(name: string) { this.name = name }
    public move(meters: number) {
        console.log(`animal ${this.name} moved in ${meters} foot`);
    }
}

class Dog extends Animal {

    constructor() {
        super('Dog');
    }

    bark() {
        console.log('woof woof');
    }
}

const dog: Dog = new Dog();
dog.bark();
dog.move(3);

///////////////////////////////////////////////////////////////////////////////////

class Animal1 {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

class Rhino extends Animal1 {
    constructor() { super("Rhino"); }
}

class Employee {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

let animal = new Animal1("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal = rhino;
// animal = employee; error

////////////////////////////////////////////////////////////////////////////////////////

class Person {
    protected name: string;
    constructor(name: string) { this.name = name; }
}

class Employee1 extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee1("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name); // error


/////////////////////////////////////////////////////////////////////////////

class Person2 {
    protected name: string;
    protected constructor(theName: string) { this.name = theName; }
}

// Employee can extend Person
class Employee2 extends Person2 {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard2 = new Employee2("Howard", "Sales");
// let john2 = new Person2("John"); // Error: The 'Person' constructor is protected


//////////////////////////////////////////////////////////////////////

class Octopus {
    readonly legs: number = 8;
    readonly name: string;

    constructor(name: string) {
        this.name = name;
        console.log(`Ocoputs named ${this.name} with legs ${this.legs}`);
    }

    public init() {
        // this.name = ''; cant work here
    }
}

const o1 = new Octopus('Oscar');


////////////////////////////////////////////////////////

class ParameterProperties {

    constructor(private a1, protected a2, public a3, readonly a4) { }
}

////////////////////////////////////////////////////////////


class GetterSetter {

    private _name: string;

    get Name(): string {
        return this._name;
    }

    set Name(name: string) {
        if (name !== '') {
            this._name = name;
        }
    }
}

console.clear();
const e1 = new GetterSetter();
e1.Name = 'ANiket';
console.log(e1.Name);
e1.Name = '';
console.log(e1.Name);

////////////////////////////////////////////////////////////////////////////

class Greeter {
    static standardGreeting = "Hello, there";
    greeting: string;
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    }
}

let greeter1: Greeter;
greeter1 = new Greeter();
console.log(greeter1.greet());

let greeterMaker: typeof Greeter = Greeter;
greeterMaker.standardGreeting = "Hey there!";

let greeter2: Greeter = new greeterMaker();
console.log(greeter2.greet());

abstract class AbstractClass {

    constructor(private name: string) { }

    abstract abstractMethod(): void

    defineMethod(): void {
        console.warn('defined method with name' + this.name);
    }
}

class ImplementationClass extends AbstractClass {

    constructor(name: string) {
        super(name);
    }

    abstractMethod(): void {
        console.log('implementation for abstract method');
    }

    methodOnlyInDervied() {

    }

}

let ic: AbstractClass;
ic = new ImplementationClass('hello');
ic.abstractMethod();
ic.defineMethod();
// ic.methodOnlyInDervied() // wont find this method

class Point {
    x: number;
    y: number;
}

interface IPoint extends Point {
    z: number;
}

let point: IPoint = { x: 1, y: 2, z: 3 }

console.log(point);