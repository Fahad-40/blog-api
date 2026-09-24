const bcrypt = require("bcrypt");
const userModel = require("../Models/userModel");
const signUpValidator = require("../Validators/signUpValidator");

const signUp = async (req, res, next) => {

    try {
        const { error } = signUpValidator.validate(req.body);
        if (error) {
            return res.status(400).json({ message: "Any of the Credential is missing brother! Please fill all the credentials." })
        }

        const { userName, email, password } = req.body;
        const saltRounds = 4;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = await userModel.create({
            userName,
            email,
            password: hashedPassword
        }
        )

        res.status(200).json(newUser)

    }

    catch (error) {
        next(error)
    }

}

module.exports = {signUp}


