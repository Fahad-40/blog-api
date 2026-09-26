const jwt = require("jsonwebtoken");
require("dotenv").config()

const protect = (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(400).json({ messsage: "No Token Provided Man!" })
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id;
        next();
    } catch (error) {
        next(error)
    }

}

module.exports = protect

