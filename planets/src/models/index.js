const axios = require('axios');
const { DB_SERVER } = require('../config/env')

const planets = axios.get(`${DB_SERVER}:10000/Planet`)
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