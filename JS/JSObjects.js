// console.log('hello');

const student = {
  name: "Ram",
  age: 20,
  branch: "CSE-A",
  language: [{
    lang1: "Java",
    lang2: "python"
  },
  {
    database1: "mySQL",
    database2: "Oracle",
    database: "mongoDB"
  },
  {
    framework1: "Hibernate",
    framework2: "Spring"
  }]
};
// console.log(student["language"][0]);

student.college = "ABES Engineering College";
delete student.name;
console.log(student);