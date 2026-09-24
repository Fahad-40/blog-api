const Joi = require("joi");

const signUpValidator = Joi.object({
    userName:Joi.string().required(),
    email:Joi.string().required(),
    password: Joi.string()
    .required()
    .min(8)
    .max(64)
    .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])'))
})

module.exports = signUpValidator