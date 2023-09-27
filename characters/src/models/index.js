const axios = require('axios');

const characters = axios.get("http://database:10000/Character")
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