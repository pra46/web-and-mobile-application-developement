// defination of the function EmployeeInfo 
function EmployeeInfo(name,Salary) 
{ 
console.log("Welcome " + name+ "Your monthly Salary is "+ Salary) 
} 
console.log ("This is my first progamee") 
var EmpName="John" 
var EmpSalary= 50000 

// calling of the function Employee Info
EmployeeInfo(EmpName,EmpSalary)
EmployeeInfo( "Rocky", 49000)
EmployeeInfo("Denish", 21000)
//Code for Second Exercise starts from here: 
const EmpSkills= (skills)=>
  { 
  console.log("Expert in "+ skills) 
  } 
  EmpSkills("java")

  const Student= require('./studentinfo')
const person = require('./person')  
// because getName is the function so we use () 
console.log("Student Name:" +Student.getName())  
console.log(Student.Location())  
console.log(Student.dob) 
// because dob is a variable so we do nt use () 
console.log(Student.Studentgrade()) 
console.log("grade is "+Student.Studentgrade(55) ) 
// creating new Person 
person1= new person("Jim"," 35 ","myemail@gmail.com") 
console.log("using Person Module",person1.getPersonInfo()) 
console.log("Programe ended") 
