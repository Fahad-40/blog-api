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
        const newPost = await postModel.create({ title, content , author });
        res.status(201).json(newPost)

    }
    catch (err) {
        next(err)
    }

}


const getAllPosts = async (req , res, next)=>{
    try {
        const posts = await postModel.find().populate("author" , "username , email");
        res.status(200).json(posts);
    } catch (error) {
        next(error)
    }
}

module.exports = {createPost , getAllPosts}