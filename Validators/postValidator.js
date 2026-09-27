let Joi = require("joi");

let postValidator = Joi.object({

    title: Joi.string().required(),
    content: Joi.string().required(),

})

module.exports = postValidator