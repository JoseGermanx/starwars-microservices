const Planet = require("../models/index");
const { response } = require("../utils/index");

module.exports = async (req, res) => {
    const Planets = await Planet.list();
    response(res, 200, Planets)
};
