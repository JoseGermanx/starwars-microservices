const { Character, Film, Planet } = require("./src/database");
const server = require("./src/server");

server.listen(10000, () => {
  console.log("Server listening on port 10000");
});

Character();
Film();
Planet();