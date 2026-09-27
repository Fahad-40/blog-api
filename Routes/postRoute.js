const express = require("express");
const protect = require("../Middlewares/authMiddleware");

const router = express.Router();

const postController = require("../Controllers/postController")

router.post("/createPost" ,protect , postController.createPost);
router.get("/getAllPost" ,protect , postController.getAllPosts);




module.exports = router


// "email" : "fahad@gmail.com",
// "password" : "Password123@"