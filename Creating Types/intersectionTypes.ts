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
   

   const fred: Contact = {
     firstName: "Fred",
     lastName: "Smith",
     landline: "0116 4238978",
     mobile: "079543 4355435",
     emailAddress: 'strong'
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
     name: "Age",
     // kind: "number",
     kind: "text",
   };


