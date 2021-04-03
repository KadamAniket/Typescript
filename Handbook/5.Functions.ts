//named function
function add(num1: number, num2: number) {
    return num1 + num2;
}

let addFunc = function (num1: number, num2: number) { return num1 + num2; }

console.log(add(1, 2))
console.log(addFunc(1, 2))

let z = 100;

function addToZ(x, y): number {
    return x + y + z;
}

console.log(addToZ(1, 2));


let myAdd: (x: number, y: number) => number;
myAdd = function (x: number, y: number): number { return x + y }
myAdd = function (num1, num2) { return num1 + num2 }

console.log(myAdd(1, 2));

//optional parameter
function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

console.log(buildName('a', 'b'));
console.log(buildName('a'));

function buildName1(firstName: string, lastName: string = '') {
    return firstName + " " + lastName;
}

console.log(buildName1('a', 'b'));
console.log(buildName1('a'));

function buildName3(firstName = "Will", lastName: string) {
    return firstName + " " + lastName;
}

console.log(buildName3("Bob", "Adams"));         // okay and returns "Bob Adams"
console.log(buildName3(undefined, "Adams"));

function sum(num1: number, ...numbers: number[]) {
    let count = num1;
    numbers.forEach(number => {
        count += number;
    });

    return count;
}

console.log(sum(1));
console.log(sum(1, 2, 3, 4, 5, 6, 7));

let deck = {
    name: 'Aniket',
    createPlayer: function () {
        return function () {
            console.log('this', this);
            return this.name;
        }
    }
}

const fun1 = deck.createPlayer();
let result = fun1();
console.log(result);

let deck2 = {
    name: 'Aniket',
    createPlayer: function () {
        return () => {
            return this.name;
        }
    }
}

const fun2 = deck2.createPlayer();
let resul2 = fun2();
console.log(resul2);