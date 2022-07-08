type VisitsData = {
  visits: Array<{
    page: {
      name: string;
    };
  }>;
  user: {
    name: string;
  };
};
function logVisits(data: VisitsData) {
  data.visits.forEach((visit) => console.log(visit.page.name, data.user.name));
}

//    Worong Awnser
logVisits({
  visits: [{ page: { caption: "Page1" } }, { page: { caption: "Page2" } }],
  user: { name: "Bob" },
});

//Correct Awnser

logVisits({
  visits: [{ page: { name: "Page1" } }, { page: { name: "Page2" } }],
  user: { name: "Bob" },
});

export {}