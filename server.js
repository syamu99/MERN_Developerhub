const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require('body-parser')
const employeeRoutes = require('./Routes/employeeRoutes') 
//we connect mongodb by using mongoClient class provided from mongodb
const { MongoClient } = require("mongodb");

//inititlization express with app
const app = express();
const PORT = process.env.PORT || 5000 //process.env.port is the create a url is oke or using server 5000

 dotenv.config()//to config for mongodb connection

 app.use(bodyParser.json())

 mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("MongoDB Connected successfully")
 })
 .catch((error)=>{
    console.log(`${error}`)

 })

 //to register routes
 app.use('/employees',employeeRoutes)
 
//write one function
app.get("/", (req, res) => {
  return res.send("Hello World !!!!");
});

//Run the express some server so created 5000 server
app.listen(PORT, () => console.log(`server running at ${PORT}`));

// MongoClient.connect(process.env.MONGO_URI)
//   .then(() =>{        
//         console.log("MongoDB connected successfully")
//     })
//   .catch((err) => console.log(err));
// console.log(process.env);