const student = {
  name: "Rahul",
  age: 20,
  course: "JavaScript"
};
student.age = 21;
student.city = "vijayawada";
delete student.age;
console.log(student.age);   //Rahul