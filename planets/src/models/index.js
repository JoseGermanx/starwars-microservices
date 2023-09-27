const axios = require('axios');

const planets = axios.get("http://database:10000/Planet")
.then(response => response.data)
.catch(err => console.log(err))

module.exports = {
    list: async () => {
        return planets;
    },

    create: async () => {
        throw Error('Not implemented')
    }
};