// Representing primitive types
// Type aliases can represent primitive types, but interfaces can't.
type Name = string;

/*#--------------------------------------------------------------------------#*/
// Representing arrays
// The type alias approach is a lot more concise and clearer.
type Names = string[];

interface Namesinterface {
  [idx: number]: string;
}

/*#--------------------------------------------------------------------------#*/
// Representing tuples
// Type aliases can represent tuple types, but interfaces can't:
type Point = [number, number];

/*#--------------------------------------------------------------------------#*/
// Representing functions
// The type alias approach is a lot more concise and clearer.
type Log = (message: string) => void;

interface LogInterface {
  (message: string): void;
}

/*#--------------------------------------------------------------------------#*/
// Creating union types
// Type aliases can represent union types but interfaces can't:
type Status = "pending" | "working" | "complete";

/*#--------------------------------------------------------------------------#*/
// Representing objects
// The interface approach is again a little more concise.
type Person = {
  name: string;
  score: number;
};

interface PersonInterface {
  name: string;
  score: number;
}

/*#--------------------------------------------------------------------------#*/
// Composing objects
// Type aliases and interfaces can both compose objects together.
type NameTypes = {
  firstName: string;
  lastName: string;
};
type PhoneNumber = {
  landline: string;
  mobile: string;
};
type Contact = Name & PhoneNumber;

interface NameInterface {
  firstName: string;
  lastName: string;
}
interface PhoneNumberInterface {
  landline: string;
  mobile: string;
}
interface ContactInterface extends NameInterface, PhoneNumberInterface {}

/*#--------------------------------------------------------------------------#*/
// Type aliases can compose interfaces and visa versa:
type NameTypes2 = {
  firstName: string;
  lastName: string;
};
interface PhoneNumberinterface {
  landline: string;
  mobile: string;
}
type ContactType = NameTypes2 & PhoneNumberinterface;

/*#--------------------------------------------------------------------------#*/
// Only type aliases can compose union types though:
type StringActions = { type: "loading" } | { type: "loaded"; data: string[] };
type NumberActions = { type: "loading" } | { type: "loaded"; data: number[] };
type Actions = StringActions & NumberActions;

/*#--------------------------------------------------------------------------#*/
// Authoring a library
// One important feature that interfaces have that type aliases don't is declaration merging:

interface ButtonProps {
     text: string;
     onClick: () => void;
   }
   interface ButtonProps {
     id: string;
   }
