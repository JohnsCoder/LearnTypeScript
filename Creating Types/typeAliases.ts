// type TypeAliasName = Existingtype;
type FisrtName = String;
type PersonScore = Number;

let firstName: FisrtName = "Tom";
let personScore: PersonScore = 70;

// type TypeAliasName = (paramName1: paramType1, paramName2: paramType2, ...) => ReturnType;
// type TypeAliasName = (..., optimalParam?: optimalParamType) => ReturnType;

type Log = (message: string, sender?: string) => void;

const log: Log = (message) => {
  console.log(message);
};
type Score = { name: String; score: Number; time?: String; log: Log };

const tomScore: Score = {
  name: "Tom",
  score: 70,
  log,
};
const bobScore: Score = {
  name: "Bob",
  score: 80,
  log,
};
const janeScore: Score = {
  name: "Jane",
  score: 90,
  log,
};
