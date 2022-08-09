let firstName: string = "Fred";
let age: number = 30;
// firstName = age;

console.log(firstName);

let jones: "Tom" | "Bob" = "Tom";
let jane: string = "Jane";
jane = jones;
// jones = jane;

type Person = {
  name: string;
};
interface IPerson {
  name: string;
  age: number;
}

let bob: Person = {
  name: "Bob",
};
let fred: IPerson = {
  name: "Fred",
  age: 30,
};
bob = fred;
// fred = bob;


type Dog = {
     name: string;
   };
   type Shape = {
     name: "Circle" | "Square";
   };
   let ben: Dog = {
     name: "Ben",
   };
   let circle: Shape = {
     name: "Circle",
   };
   ben = circle;
//    circle = ben;

let add1 = (a: number, b: number): number => a + b;
let sum1 = (x: number, y: number): number => x + y;

sum1 = add1;
add1 = sum1;

let add2 = (a: number, b: number, c: number): number => a + b + c;
let sum2 = (x: number, y: number): number => x + y;
add2 = sum2;
// sum2 = add2;

let add3 = (a: number, b: number, c?: number): number => a + b + (c || 0);
let sum3 = (x: number, y: number): number => x + y;
sum3 = add3;
add3 = sum3;

// A variable, a, can be assigned to another variable, b, if the type of b is wider than the type of a.
// An object, a, can be assigned to another object, b, if a has at least the same members as b.
// A function, a, can be assigned to another function, b, if each parameter in a has a corresponding parameter in b with a compatible type.
