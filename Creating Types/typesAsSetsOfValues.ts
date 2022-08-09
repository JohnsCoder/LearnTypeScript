type Bob = "Bob";


type OrderStatus = "pending" | "completed";
type DeliveryStatus = "completed" | "shipped";
type StatusUnion = OrderStatus | DeliveryStatus;

type StatusIntersection = OrderStatus & DeliveryStatus;

// NEVER VS UNKNOWN
// The never type doesn't contain any values and can be thought of as an empty set.
// The unknown contains all the possible values!



// On line 2, the type of status is string | null.
// On line 3, the type of status is string.
// We can say TypeScript has narrowed the type of status on line 3. This is because the set of values has been reduced because the null value has been removed.

function logStatus(status: string | null) {
     if (status) {
       console.log(status);
     }
   }