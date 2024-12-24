const express = require("express");
const fs = require ("fs");

const app = express()

app.get('/', function(request , response){
    response.send("Welcome to Express. This is first web server")
})
/*Second Exercise*/
app.get('/about',function(request,response){
    response.send("This is First Path Something Different") 
}) 

app.get('/users/:userId', function (request, response) { 
response.send(request.params) 
})

app.listen(8000, function(){
    console.log("Server is running on port 8000")
})

app.get('/GetStudents',function (req,res) 
{ studentdata={} 
 fs.readFile(__dirname + "/" + "student.json", 'utf8', 
function (err, data) { console.log( data ); 
   res.json({ 'status':true, 'Status_Code':200, 
   'requested at': req.localtime, 'requrl':req.url, 
   'request Method':req.method, 'studentdata':JSON.parse(
 data)}); 
}); 
}) 
 
app.get('/studentinfo',function(req,res) 
{ 
res.sendFile('StudentInfo.html', { root:   __dirname }); 
}) 
app.post('/submit-data', function (req, res) { 
var name = req.body.firstName + ' ' + req.body.lastName+' '; 
var Age= req.body.myAge+ ' Gender: ' + req.body.gender+''
Qual= ' Qualification'+ req.body.Qual  
console.log(req.body.Qual) 
res.send({ 
status: true, 
message: 'form Details', data: { 
name: name, age:Age, Qualification:Qual, 
} 
}); 
});