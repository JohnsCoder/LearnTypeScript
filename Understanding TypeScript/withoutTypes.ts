function logVisits(data) {
  data.visits.forEach((visit) => console.log(visit.page.name, data.user.name));
}

// Wrong Awnser
logVisits({
  visits: [{ name: "Page1" }, { name: "Page2" }],
  user: { name: "Bob" },
});
//Correct Awnser
logVisits({
  visits: [{page: { name: "Page1" }}, {page: { name: "Page2" }}],
  user: { name: "Bob" },
});

export {}