const mongoose = require("mongoose");

const { MONGO_URI } = require("../config/env.js");

const conn = mongoose.createConnection(MONGO_URI);

conn.on("connected", () => {
  console.log("Database connected");
});

const Character = conn.model("Character", require("./schemas/characterSchema"));
const Film = conn.model("Film", require("./schemas/filmsSchema"));
const Planet = conn.model("Planet", require("./schemas/planetsSchema"));

const store = {
  Character,
  Film,
  Planet,
};

module.exports = {
  Character,
  Film,
  Planet,
  store,
};
