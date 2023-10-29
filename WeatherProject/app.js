const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req, res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req,res){
  const city = req.body.cityName;
  const appId = "b2062c45bd520bcadddae7d7ad3967bd";
  const unit = "metric";
  https.get("https://api.openweathermap.org/data/2.5/weather?q="+ city + "&appid=" + appId + "&units=" + unit, function(response){
  // console.log(response.statusCode);
  response.on("data", function(data){
      const parsedData = JSON.parse(data);
      console.log(parsedData.weather[0].icon);
      const weatherDesc = parsedData.weather[0].description;
      const temp = parsedData.main.temp;
      const icon = parsedData.weather[0].icon;
      const imageUrl = "https://openweathermap.org/img/wn/" + icon + ".png";
      res.set("Content-Type", "text/html");
      res.write("<img src=" + imageUrl + "></img>");
      res.write("<h3>The weather is currently: "+ weatherDesc +"</h3>");
      res.write("<h1>The temperature in " + city + " is " + temp + " degree Celsius</h1>");
      res.send();
    });
  });
});

app.listen(3000, function(){
  console.log("Server is running on port 3000");
});