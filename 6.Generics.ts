generics();

function generics() {
    function anyEcho(input: any): any {
        return input;
    }

    function echo<T>(input: T): T {
        return input;
    }

    let result = anyEcho('asdjkl');
    console.log(result);
    let output = echo<string>('aniket');
    console.log(output);
    let output1 = echo('aniket');
    console.log(output1);


    function logLength<A>(input: A[] | Array<A>): void {
        console.log(input.length);
    }

    let numberArray: <A>(input: A[]) => void = logLength;
    let numberArrayObjectLiteral: { <T>(array: T[]): void } = logLength;


    ////////////////////////////////////////////////////////////////////////////////

    interface IGenericLog {
        <T>(input: T): T
    }

    function logMyIdentity<T>(input: T): T {
        return input;
    }

    const genericLog: IGenericLog = logMyIdentity;
    console.log(genericLog(4));
    console.log(genericLog.call(undefined, 4));

    interface genericIdentityFn<T> {
        (input: T): T;
    }

    const objGeneric: genericIdentityFn<number> = logMyIdentity;

    ////////////////////////////////////////////////////////////////////////////

    class GenericAddition<T>{
        result: T;

        add: (input1: T, input2: T) => T;
    }

    let numberAdd = new GenericAddition<number>();
    numberAdd.result = 0;
    numberAdd.add = (num1: number, num2: number): number => { return num1 + num2 }

    console.log(numberAdd.add(2, 3));
}

/////////////////////////////////////////////////////////////////////////////////////
interface IReturnLength {
    length: number;
}

function returnLength<T extends IReturnLength>(input: T): number {
    return input.length
}

const numberLength = returnLength({ length: 55 });
console.log(numberLength);

function getProperty<T, K extends keyof (T)>(obj: T, key: K) {
    return obj[key];
}

let input = { a: 1, b: 'as', c: 1.56 };

console.log(getProperty(input, 'a'));
console.log(getProperty(input, 'b'));
// console.log(getProperty(input, 'm')); //does not compile

/////////////////////////////////////////////////////////////////////////////////////
class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
}

class Animal {
    numLegs: number;
}

class Bee extends Animal {
    keeper: BeeKeeper;
}

class Lion extends Animal {
    keeper: ZooKeeper;
}

function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}

createInstance(Bee);
createInstance(Lion);