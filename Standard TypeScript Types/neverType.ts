const keepLogging = (message: string) => {
  while (true) {
    console.log(message);
  }
};

type Status = "Pending" | "Working" | "Complete" | "Canceled";

function doSomeAction(status: Status) {
  switch (status) {
    case "Pending":
      // some code
      break;
    case "Working":
      // some code
      break;
    case "Complete":
     // some code
    case "Canceled":
      // some code
      break;
    default:
      neverReached(status);
  }
}

function neverReached(never: never) {}
doSomeAction("Pending");

export {}