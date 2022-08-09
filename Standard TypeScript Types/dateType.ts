const dateOfBirth = new Date(1990, 4, 7);

//wrong code
// console.log(dateOfBirth.addDays(2));

function calculateRenewal(startDate: Date) {
     const result = new Date(startDate);
     result.setDate(result.getDate() + 30);
     return result;
   }