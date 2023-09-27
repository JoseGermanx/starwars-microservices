const  { ClientErrors }  = require("../utils/errors");

module.exports = (req, res, next) => {
    const { name } = req.body;
    if (name) return next();
    else throw new ClientErrors("Name is required", 401)
}