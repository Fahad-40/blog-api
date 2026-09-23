let Joi = require("joi");

let userValidator = Joi.object({

    userName: Joi.string.required(),
    email: String().required(),
    password: String().required()

})

module.exports = userValidator