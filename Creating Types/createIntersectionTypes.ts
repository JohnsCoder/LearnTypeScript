type Name = {
  firstName: string;
  lastName: string;
};
type PhoneNumber = {
  landline: string;
  mobile: string;
};

type Email = {
  emailAddress: string;
};

type Contact = Name & PhoneNumber & Email;

const people: Contact = {
  firstName: "John",
  lastName: "Peter",
  landline: "+55",
  mobile: "61983004851",
  emailAddress: "joaomanain15@gmail.com",
};

type BaseElement = {
  name: string;
  kind: "text" | "number" | "email";
};
type TextInput = {
  kind: "text";
};
type Field = BaseElement & TextInput;

const age: Field = {
  name: "age",
  kind: "text",
  // wrong code
  // kind: 'number'
};

type A = {
  doIt: (a: string) => void;
};
type B = {
  doIt: (a: string, b: string) => void;
};
type A_and_B = A & B;

const ab_v1: A_and_B = {
  doIt: (a: string) => {},
};

const ab_v2: A_and_B = {
  doIt: (a: string) => {},
  // wrong code
  // doIt: (a: string, b: string) => {},
};

export {}