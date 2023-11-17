
// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

// const url = 'mongodb://localhost:27017';

// const dbName = 'fruitsDB';

// const client = new MongoClient(url);

// client.connect(function(err){
//   assert.equal(null,err);
//   console.log('Connected successfully to server');

//   const db = client.db(dbName);

//   client.close();
// })


// var MongoClient = require('mongodb').MongoClient;
// var dburl = "mongodb://127.0.0.1:27017/fruitsDB";
// MongoClient.connect(dburl, function(err, db) {
//   if (err) {
//     throw err;
//   }
//   console.log('db connected');
//   db.close();
// });

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/peopleDB");
// mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");

// const fruitSchema = new mongoose.Schema({
//   name: String,
//   rating: Number,
//   review: String
// });
// const Fruit = mongoose.model("Fruit", fruitSchema);

// const fruit = new Fruit({
//   name: 'Apple',
//   rating: 7,
//   review: "A pretty solid fruit"
// });
// fruit.save();
const peopleSchema = new mongoose.Schema({
  name: String,
  age: Number
});
const People = mongoose.model("People", peopleSchema);

const people = new People({
  name: 'Aadi',
  age: 21
});
people.save();



// console.log("All is good");