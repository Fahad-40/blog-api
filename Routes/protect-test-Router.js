const express = require("express");
const protect = require("../Middlewares/authMiddleware");
// const signUpController = require("../Controllers/signUpController");
const router = express.Router();

router.get("/protected-test", protect, (req, res) => {
  res.json({ message: "Access granted", userId: req.userId });
});

module.exports = router