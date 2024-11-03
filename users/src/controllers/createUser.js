const User = require("../models");
const { response } = require("../utils");

module.exports = async (req, res) => {
    const { name, email, password } = req.body;
  const newUser = await User.create(name, email, password);
  response(res, 201, newUser);
};
