//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const request = require("request");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

app.get("/",function(req, res){
  console.log("get is running!");
  res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req, res){
  const firstName = req.body.FirstName;
  const lastName = req.body.LastName;
  const email = req.body.Email;
  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields:{
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  };

  const jsonData = JSON.stringify(data);
  const url = "https://us21.api.mailchimp.com/3.0/lists/25da9c8c56";
  const options = {
    method: "POST",
    auth: "aaditya:47ac58ef5d96c61acd736e82880dc19d-us21"
  };
  const request=https.request(url, options, function(response){
    response.on("data", function(data){
      response.statusCode==200 ? res.sendFile(__dirname+ "/success.html"): res.sendFile(__dirname + "/failure.html");
      console.log(response);
    });
  });

  request.write(jsonData);
  request.end();
});

app.post("/failure",function(req, res){
  res.redirect("/");
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Server is running on port 3000");
});

// Mail chimp api
// 47ac58ef5d96c61acd736e82880dc19d-us21

// unique list_id for audience
// 25da9c8c56