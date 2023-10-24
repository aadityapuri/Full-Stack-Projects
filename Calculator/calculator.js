const express = require("express");
const bodyParser= require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req, res){
  var num1 = parseInt(req.body.num1);
  var num2 = parseInt(req.body.num2);
  res.send("Result is "+ (num1+num2));
});

app.post("/bmiCalculator", function(req, res){
  var weight = parseInt(req.body.weight);
  var height = parseInt(req.body.height);
  res.send("BMI index calculated is: " + (weight/height**2));
});

app.get("/bmiCalculator",function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.listen(3000, function(){
  console.log("Server has started.");
});