const { token } = require("morgan");
const User = require("../models");
const { response } = require("../utils");
// jsonwebtoken
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
    const { name, email, password } = req.body;

    const token = jwt.sign({ email }, process.env.JWT_SECRET);
    
  const newUser = await User.create(name, email, password, token);
  response(res, 201, newUser);
};
