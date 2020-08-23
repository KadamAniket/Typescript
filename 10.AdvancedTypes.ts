advancedTypes();

function advancedTypes() {

    function extend<T, U>(first: T, second: U): T & U {
        let result: T & U = <T & U>{};

        // Loop is for data member iteration
        for (let id in first) {
            (<any>result[id]) = first[id];
        }

        for (let id in second) {
            (<any>result)[id] = (<any>second)[id];
        }

        return result;
    }

    class Person {
        constructor(public name: string) { }
    }

    interface ILoggable {
        log(): void
    }

    class Logger implements ILoggable {
        log(): void {
            console.log('logging');
        }
    }

    var jim = extend(new Person('Aniket'), new Logger());
    console.log(jim.name)
    jim.log();

    ////////////////////////////////////////////////////////////////////////

    interface Bird {
        fly();
        layEggs();
    }

    interface Fish {
        swim();
        layEggs();
    }

    class Eagle implements Bird {
        fly() { }
        layEggs() { }
    }

    function getAnimal(): Bird | Fish {
        return new Eagle();
    }

    let animal = getAnimal();
    animal.layEggs();
    // animal.swim()    ERROR
    // animal.fly()     ERROR

    // if(animal.fly // wont work
    if ((animal as Bird).fly) {
        (animal as Bird).fly();
    }
    else if ((animal as Fish).swim) {
        (animal as Fish).swim();
    }


    function isType<T>(input: any, prop: string): input is T {
        return (input[prop] !== undefined);
    }

    console.log(isType<Fish>(animal, 'swim'));
    console.log(isType<Bird>(animal, 'fly'));


    let s1 = 'ANket';
    s1 = null;

    let sn: string | null = "foo";
    sn = null;
    sn = undefined;

    function s(input: string | null): string {
        return input || 'default';
    }

    console.log(s('ani'));
    console.log(s(null));

}
