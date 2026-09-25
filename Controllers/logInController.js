const bcrypt = require("bcrypt");
const User = require("../Models/userModel");
const jwt = require("jsonwebtoken");
const logInvalidator = require("../Validators/logInValidator");
require("dotenv").config()

const logIn = async (req, res, next) => {

    try {
        const { error } = logInvalidator.validate(req.body);

        if (error) {
          return  res.status(400).json({ message: "Any of the Credential is missing brother! Please fill all the credentials." })
        }

        const { email, password } = req.body;

        const userInfo = await User.findOne({ email });

        if (!userInfo) {
            return res.status(400).json({ message: "invalid Email." })
        }

        const isMatch = await bcrypt.compare(password, userInfo.password);

        if (!isMatch) {
            return res.status(400).json({ message: "invalid Email or password" })
        }

        if (isMatch) {
            const token = jwt.sign(
                { id: userInfo._id },
                process.env.JWT_SECRET,
                { expiresIn: "1d" }
            )

            res.status(200).json({
                message: "Log In successfull",
                token: token,
                user: userInfo
            })

        }
    } catch (error) {
        next(error)
    }

}

module.exports = {logIn}