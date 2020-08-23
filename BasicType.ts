// TUPLE

let x: [number, string];
x = [1, 'aniket'];
x[3] = 'anoop';
x[6] = 10;
console.log(x[0]);
console.log(x[1]);
console.log(x[3]);
console.log(x[6]);
console.clear();

// ENUM
enum Colors { Red, Green, Blue };
let c: Colors = Colors.Green;
console.log(c);
console.log(Colors[c]);
console.clear();

// Any
let sampleAny: any = 10;
sampleAny = 'hajsdlkasd';
console.log(sampleAny);
console.clear();

// Void
const voidValue: void = null;
const voidValue1: void = undefined;
console.log(voidValue);
console.log(voidValue1);
console.clear();

//Null and Undefined
const undefinedValue: undefined = undefined;
const undefinedValue1: undefined = null;
const nullValue: null = null;
const nullValue1: undefined = undefined;

//Never
function sample(): never {
    throw Error('error');
}

function endLoop(): never {
    while (true) {

    }
}

// Not working
// function trial(): never {
//     const value = true;
//     if (value) {

//     } else {

//     }
// }

// Type Assertions
let objValue: any = 'aniket';
let someValue = (objValue as string).toUpperCase();
console.log(someValue);
someValue = (<string>objValue).toLowerCase();
console.log(someValue);