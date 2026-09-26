let Joi = require("joi");

let postValidator = Joi.object({

    title: Joi.string().required(),
    content: String().required(),

})

module.exports = postValidator