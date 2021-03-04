// // for letting typescript variable to be any type and be reassignible to any type 
// // use such syntax with any
// let data: any = 42;

// // using union type for letting variable to be specified types 
// let a: number | string = 42;

// data = '42'; 

// to make some property optional for following interface implementations
// type question mark ? after prop name, but it is not recommended
export interface Duck {
    name: string;
    numLegs: number;
    makeSound: (sound: string) => void;
}


const duck1: Duck = {
    name: 'huey',
    numLegs: 2,
    makeSound: (sound: any) => console.log(sound)
}

const duck2: Duck = {
    name: 'dewey',
    numLegs: 2,
    makeSound: (sound: any) => console.log(sound)
}

// to ignore possible undefined value for missing interface property
// exclamation mark is used, but it is not recommended to do!
duck1.makeSound!('quack');

export const ducks = [duck1, duck2];