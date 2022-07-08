/* 
interface TypeName {
     propertyName: PropertyType;
     methodName: (paramName: ParamType) => MethodReturntype;
}
*/

interface ButtonProps {
  text: String;
  onClick?: () => void;
}

const buyButton: ButtonProps = {
  id: "0",
  text: "Buy",
  onClick: () => console.log("Buy"),
};

/*
Copy
interface InterfaceA extends InterfaceB {
 ...
}
*/

interface ColoredButtonProps extends ButtonProps {
  color: String;
}

const greenBuyButton: ColoredButtonProps = {
  id: "1",
  color: "blue",
  text: "Hi!",
};

/*
interface typeName {
     (paramName1: paramType1, ...): ReturnType;
}
*/
interface Log {
  (message: String): void;
}

const log: Log = (message) => {
  console.log(message);
};

interface ButtonProps {
  id: string;
}
