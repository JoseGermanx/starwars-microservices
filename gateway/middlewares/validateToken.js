
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/env");

module.exports = (req, res, next) => {
    const token = req.headers['x-access-token'];
    if (!token) {
        return res.status(403).send({ auth: false, message: 'No token provided.' });
    }

    jwt.verify(token, JWT_SECRET, function(err, decoded) {
        if (err) {
            return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        }
        req.email = decoded.email;
        next();
    });
}

