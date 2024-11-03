const axios = require('axios');
const { DB_SERVER } = require('../config/env')

const films = axios.get(`http://database:10000/Film`)
.then(response => response.data)
.catch(err => console.log(err))

module.exports = {
    list: async () => {
        return films;
    },

    create: async () => {
        throw Error('Not implemented')
    },

    get: async (id) => {
        return films.then(films => films.find(film => film._id === id));
    }
};