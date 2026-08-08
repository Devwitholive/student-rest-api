const express = require("express");

const app = express();

const PORT = 3000;

app.use(express.json());

//in memory db
let student = [
 {
   id:1,
   name:"Daniel",
   age:20,
   course:"Computer Engineering"  
 }
];

// create student
app.post("/students", (req, res) => {
  const { name, age, course } = req.body;

  const student = {
    id: students.length + 1,
    name,
    age,
    course
  };
  student .push (student);
  
 res.status(201).json({
   message: "student added successfully",
   student
  });
});

//Get All Students
app.get("/students", (req, res) => {
  res.json (students);
});

//get student by ID
app.get("/students:id", (req,res) => {
  const id =parseInt (req.params.id);
  const student = students.find(student => student.id === id);
  if(!student){
    return res.status (404).json({
      message: "student not found"
    });
  }
  res.json(student);
});

//update student
app.put("students/:id", (req,res) => {
  const id = parseInt (req.params.id);
  const student = students. find(student => student.id === id);
if (!student){
  return res.status(404).json({
    message: "student not found"
  });
}
const { name, age, course } = req.body;

student.name =name;
student.age=age;
student.course=course;
res.json({
   message: "student updated successfully",
   student
 });
});

//Delete student 
app.delete ("/students/:id", (req, res) => {
  const id =parseInt(req.params.id);
  students = students.filter(student => student. id !== id);
  res.json({
    message: "student deleted successfully"
  });
});

//start server
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
