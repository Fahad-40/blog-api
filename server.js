let express = require("express");
let app = express();
let mongoose = require("mongoose");
const authRouteSignUp = require("./Routes/signUpRouter")
const authRoutelogIn = require("./Routes/logInRouter")
const protectedRouteTest = require("./Routes/protect-test-Router")
const postRoutes = require("./Routes/postRoute")

app.use(express.json());

app.use("/api/authSignUp" , authRouteSignUp)
app.use("/api/authlogIn" , authRoutelogIn)
app.use("/protectTest" , protectedRouteTest)
app.use("/posts" , postRoutes)

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