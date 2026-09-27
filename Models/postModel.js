const mongoose = require("mongoose");

const postSchema = mongoose.Schema({

title: {
    type: String,
    required: true
},

content: {
     type: String,
    required: true
},

author: {
    type:mongoose.Schema.Types.ObjectId,
    ref: "userModel",
    required:true
},

},

{timetamps:true}
);

const postModel = mongoose.model("postModel" , postSchema)
module.exports =  postModel