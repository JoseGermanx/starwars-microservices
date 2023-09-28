const axios = require('axios');
const { DB_SERVER } = require('../config/env')

const characters = axios.get(`${DB_SERVER}:10000/Character`)
.then(response => response.data)
.catch(err => console.log(err))

module.exports = {
    list: async () => {
        return characters;
    },

    create: async () => {
        throw Error('Not implemented')
    }
};