const express = require("express");
const logInController = require("../Controllers/logInController");
const router = express.Router();

router.post("/logIn" , logInController.logIn);

module.exports = router