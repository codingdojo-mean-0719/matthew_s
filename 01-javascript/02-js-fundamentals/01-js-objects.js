// 30 minutes max
let students = [
  { name: 'Remy', cohort: 'Jan' },
  { name: 'Genevieve', cohort: 'March' },
  { name: 'Chuck', cohort: 'Jan' },
  { name: 'Osmund', cohort: 'June' },
  { name: 'Nikki', cohort: 'June' },
  { name: 'Boris', cohort: 'June' }
];

for (var i = 0; i < students.length; i++) {
  let student = students[i];
  console.log("Name: " + student.name + ", Cohort: " + student.cohort);
}

var users = {
  employees: [
    { 'first_name': 'Miguel', 'last_name': 'Jones' },
    { 'first_name': 'Ernie', 'last_name': 'Bertson' },
    { 'first_name': 'Nora', 'last_name': 'Lu' },
    { 'first_name': 'Sally', 'last_name': 'Barkyoumb' }
  ],
  managers: [
    { 'first_name': 'Lillian', 'last_name': 'Chambers' },
    { 'first_name': 'Gordon', 'last_name': 'Poe' }
  ]
};

for (var key in users) {
  var employee = users.employees;
  console.log("EMPLOYEES");
  for (var i = 0; i < employee.length; i++) {
    var length = employee[i].first_name.length + employee[i].last_name.length;
    console.log(i + " - " + employee[i].last_name + " , " + employee[i].first_name + " - " + length);
  }
  var manager = users.managers;
  console.log("MANAGERS");
  for (var i = 0; i < manager.length; i++) {
    var length = manager[i].first_name.length + manager[i].last_name.length;
    console.log(i + " - " + manager[i].last_name + " , " + manager[i].first_name + " - " + length);
  }
}