const postModel = require("../Models/postModel");
const postValidator = require("../Validator/postValidator");


const createPost = async (req ,res, next) => {

    const {error} = postValidator.validate(req.body);

    if(error){
        return res.status(400).json({message:"Title or Content Not provided Man!"})
    }

try{
const {title , content} = req.body;
const newPost = await postModel.create({title , content});
res.status(201).send("Post Created!" , newPost)

}
catch(err){
    next(err)
}

}
