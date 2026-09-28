const postModel = require("../Models/postModel");
const User = require("../Models/userModel");
const postValidator = require("../Validators/postValidator");

const createPost = async (req, res, next) => {

    const { error } = postValidator.validate(req.body);

    if (error) {
        return res.status(400).json({ message: "Title or Content Not provided Man!" })
    }

    try {
        const { title, content } = req.body;
        const author = req.userId;
        const newPost = await postModel.create({ title, content, author });
        res.status(201).json(newPost)

    }
    catch (err) {
        next(err)
    }

}

const getAllPosts = async (req, res, next) => {
    try {
        const posts = await postModel.find().populate("author", "username , email");
        res.status(200).json(posts);
    } catch (error) {
        next(error)
    }
}

const updatePost = async (req, res, next) => {
    try {
        const post = await postModel.findById(req.params.id);

        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        if (post.author.toString() !== req.userId) {
            return res.status(403).json({ message: "Not authorized to edit this post" });
        }

        post.title = req.body.title || post.title;
        post.content = req.body.content || post.content;
        await post.save();

        return res.status(200).json(post);

    }
    catch (error) {
        next(error);
    }
}

const deletePost = async (req, res, next) => {
    const post = await postModel.findById(req.params.id);

    if (!post) {
        return res.status(403).json({ message: "Post not Found!" });
    }

    if (post.author.toString() !== req.userId) {
        return res.status(403).json({ message: "You cannot edit others Post!" })
    }

    const postToDelete = await postModel.findByIdAndDelete(req.params.id);

    if (postToDelete) {
        return res.send("Post Deleted!")
    }

}


module.exports = { createPost, getAllPosts, updatePost, deletePost }



// "title": "Fahad billionaire",
// "content" : "How he became so famouse that people now take appointments to talk to him about finance , tech ,
// enterprenuership , products etc"     

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhYjU1M2UxMjhmOWQzYzkxMThlYTcwNSIsImlhdCI6MTc5MDQ5NzI3NiwiZXhwIjoxNzkwNTgzNjc2fQ.kCvv7i44rYmVRrMkinu-moP_Oku6QkXAUwMpSuGnCbg