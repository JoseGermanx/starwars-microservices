const  { ClientErrors }  = require("../utils/errors");

module.exports = (req, res, next) => {
    const { name, email, password } = req.body;
    if (name && email && password) return next();
    else throw new ClientErrors("Name, email and password are required", 401)
}