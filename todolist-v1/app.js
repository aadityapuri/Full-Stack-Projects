//jshint esversion:6

const express = require("express");
const bodyParser= require("body-parser");

const app= express();

app.set('view engine', "ejs");

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

let item = ['Buy Food', 'Cook Food', 'Eat Food'];

app.get("/", function(req, res){
  let today= new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }
  
  let str = today.toLocaleDateString("en-US",options);
  // console.log(str);
  // let day = today.getDay();
  // if(day === 0){
  //   str = "Sun";
  // }
  // else if(day === 1){
  //   str = "Mon";
  // } 
  // else if(day === 2){
  //   str = "Tues";
  // } 
  // else if(day === 3){
  //   str = "Wednes";
  // } 
  // else if(day === 4){
  //   str = "Thurs";
  // } 
  // else if(day === 5){
  //   str = "Fri";
  // } 
  // else{
  //   str = "Satur";
  // }
  // console.log("this is fine!");
  res.render("list",{
    dayKind: str,
    newListItem: item
  });
});

app.post('/',(req,res)=>{
  item.push(req.body.addListItem);
  // console.log(req.body.addListItem);
  res.redirect("/");
});

app.listen(3000, function(){
  console.log("Server has started on port 3000");
});
