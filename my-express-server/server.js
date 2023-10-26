const express=require("express");
const app = express();

app.get("/",function(req,res){
  res.send("Hello");
});

app.get("/contact-me",function(req,res){
  res.send("Contact me at aadityapuriaaditya@gmail.com");
});

app.get("/about",function(req,res){
  res.send("About me page!");
});

app.get("/what",function(req,res){
  res.send("About me page!");
});

app.listen(3000, function(){
  console.log("Server has started");
});