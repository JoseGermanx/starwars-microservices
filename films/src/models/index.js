const axios = require('axios');
const { DB_SERVER } = require('../config/env')

const films = axios.get(`${DB_SERVER}:10000/Film`)
.then(response => response.data)
.catch(err => console.log(err))

module.exports = {
    list: async () => {
        return films;
    },

    create: async () => {
        throw Error('Not implemented')
    }
};