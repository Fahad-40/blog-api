let express = require("express");
// require("dotenv").config();
let app = express();

let mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/blog-api")
.then(() => {
    console.log("Mongodb Connected")
})
.catch (() => {
    console.log("Mongodb found error")
})
app.listen("3000" , () =>{
    console.log("App is listening on port 3000")
})