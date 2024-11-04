const { update } = require('../models')
const { catchedAsync } = require('../utils')


module.exports = {
    createUser: catchedAsync(require('./createUser')),
    updateToken: catchedAsync(require('./updateToken'))
}