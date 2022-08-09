const items:any = [];
items.push(1);
items.push("two");
items.push(false);

console.log(items);

const numbers: Array<number> = [];
numbers.push(1);
// wrong code
// numbers.push("two");
// numbers.push(false);

const numbers1: Array<number> = [
     1, 
     // wrong code
     // "two", 
     // false
];
console.log(numbers);

const strings: string[] = ["one", "two", "three"];

const array = [1, 2, 3];
console.log(array);

function logScores(firstName:string, ...scores:number[]) {
     console.log(firstName, scores);
   }
   
   logScores("Ben", 50, 75, 85); // outputs Ben and [50, 75, 85]
   logScores("Mike", 90, 65, "65");