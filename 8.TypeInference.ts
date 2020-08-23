typeInference();

function typeInference() {
    class Rhino { legs: number; }
    class Elephant { }
    class Snake { }
    const zoo = [new Rhino(), new Elephant(), new Snake()];
    const x = [0, 1, null];

    console.log(typeof (zoo));
    console.log((zoo[0] as Rhino).legs)

    class Animal { }
    class Dog extends Animal { }
    const ay = [new Animal(), new Dog()];

    function createZoo() {
        return [new Rhino(), new Elephant(), new Snake()];
    }
    function getAnimal() {
        return [new Animal(), new Dog()];
    }

}