const { catchedAsync } = require('../utils')


module.exports = {
    getFIlms: catchedAsync(require('./getFilms')),
    createFIlm: catchedAsync(require('./createFilm'))
}