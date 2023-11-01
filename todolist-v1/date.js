//jshint esversion:6

module.exports.getDate = getDate;

function getDate(){
  let today= new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }
  
  let str = today.toLocaleDateString("en-US",options);

  return str;
}

module.exports.getDay = getDay;

function getDay(){
  let today= new Date();

  let options = {
    weekday: "long"
  }
  
  let str = today.toLocaleDateString("en-US",options);

  return str;
}