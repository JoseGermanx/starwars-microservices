const Film = require("../models/index");
const { response } = require("../utils/index");

module.exports = async (req, res) => {
    const Films = await Film.list();
    response(res, 200, Films)
};
