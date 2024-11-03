const Film = require("../models");
const { response } = require("../utils");

module.exports = async (req, res) => {
    const film = await Film.get(req.params.id);
    if (!film) {
        response(res, 404, { message: 'Film not found' });
        return;
    }
    response(res, 200, film);
}