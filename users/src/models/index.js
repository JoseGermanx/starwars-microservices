const axios = require("axios");
const { DB_SERVER } = require("../config/env");

const users = axios
  .get(`http://database:10000/User`)
  .then((response) => response.data)
  .catch((err) => console.log(err));

module.exports = {
  list: async () => {
    return users;
  },

  create: async (name, email, password, token) => {
    // crear un usuario basado en el schema de la base de datos
    try {
      const user = await axios.post(`http://database:10000/User`, {
        name,
        email,
        password,
        token,
      });
      return user.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};
