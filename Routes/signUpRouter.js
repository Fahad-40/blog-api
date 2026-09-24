const express = require("express");
const signUpController = require("../Controllers/signUpController");
const router = express.Router();

router.post("/signUp" , signUpController.signUp);

module.exports = router