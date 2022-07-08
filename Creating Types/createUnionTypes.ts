//type A_or_B_or_C = A | B | C;

type Age = number | null | undefined;
let age: Age;
age = null;
age = 30;
age = undefined;

console.log(age);

type Fruit = "Banana" | "Apple" | "Pear";

let fruit: Fruit;
fruit = "Apple";
/*
fruit = "pear";
fruit = "strawberry";
*/

type Actions = { type: "Loading" } | { type: "loaded"; data: { name: string } };

const loadingAction: Actions = {type: 'Loading'}