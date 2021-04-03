typeCompatibility();

function typeCompatibility() {

    interface person {
        name: string;
    }

    class employee {
        name: string;
    }

    let obj: person;
    obj = new employee();


    let x: person;
    let y = { name: 'ANiket', address: 'Pune' };
    x = y;
    greet(y);

    function greet(n: person) {
        console.log('greet');
    }

    /////////////////////////////////////////////

    let x1 = (a: number) => 0;
    let y1 = (b: number, s: string) => 0;
    let z1 = (a: string, b: string) => 0;
    let a1 = (y: string, u: number) => 0;

    y1 = x1; // OK
    // x1 = y1; // Error
    // a1=y1 order is imp


    let x2 = () => ({ name: "Alice" });
    let y2 = () => ({ name: "Alice", location: "Seattle" });

    x2 = y2; // OK
    // y2 = x2; // Error, because x() lacks a location property


    enum Status { Ready, Waiting };
    enum Color { Red, Blue, Green };

    let status = Status.Ready;
    // status = Color.Green;  // Error

    class Animal {
        feet: number;
        constructor(name: string, numFeet: number) { }
    }

    class Size {
        feet: number;
        constructor(numFeet: number) { }
    }

    let a: Animal;
    let s: Size;

    a = s;  // OK
    s = a;  // OK

    interface Empty<T> {
    }
    let xE: Empty<number>;
    let yE: Empty<string>;

    xE = yE;



}
