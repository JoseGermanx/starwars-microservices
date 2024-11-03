const { catchedAsync } = require('../utils')


module.exports = {
    createUser: catchedAsync(require('./createUser'))
}