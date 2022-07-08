let score: number;
score = 10;

//Wrong Code
// score = 'Hello'

function add(a: number, b:number):number {
     return a + b;
}
//We have defined that the return value in the above add function is of type number.

const minus = function (a: number, b: number): number {
     return a - b;
   };

   const multiply = (a: number, b: number): number => a * b;

   function split(a: number, b?: number): number {
     return a / (b || 0);
   }
   
   split(3)