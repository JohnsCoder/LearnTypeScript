let score = 10;
console.log(score);

//put the mouse on variables to see the type
let dateOfBirth = new Date(1990, 4, 7);

const firstName = "Bob";

const age = 31;
const created = new Date(2019, 11, 6);
{
  const last = "Smith";
  const surname = last;
}
{
  const last = "Smith";
  let surname = last;
}
{
  const first = "Bob";
  const last = "Smith";
  const fullName = `${first} ${last}`;
}
let counter;

function add(a: number, b: number) {
  return a + b;
}
const ten = add(5, 5);

{
function addTen(a) {
  return a + 10;
}
const fourteen = addTen(4);
}

{
function removeTen(a = 1) {
  return a - 10;
}
const fourteen = removeTen(1);
}

export {}