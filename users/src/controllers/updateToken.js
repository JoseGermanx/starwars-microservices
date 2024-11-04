

const User = require("../models");
const { response } = require("../utils");
// jsonwebtoken
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
    const { id, email } = req.body;

    const token = jwt.sign({ email }, process.env.JWT_SECRET);
    
  const upDateUser = await User.update(id, token);
  response(res, 201, upDateUser);
};