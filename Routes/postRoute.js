const express = require("express");
const protect = require("../Middlewares/authMiddleware");

const router = express.Router();

const postController = require("../Controllers/postController")

router.post("/createPost" ,protect , postController.createPost);
router.get("/getAllPost" ,protect , postController.getAllPosts);
router.post("/updatePost/:id" ,protect , postController.updatePost);
router.get("/deletePost/:id" ,protect , postController.deletePost);

module.exports = router


