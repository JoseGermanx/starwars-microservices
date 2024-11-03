
const { Schema } = require('mongoose');

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    role: {
        type: String,
        default: 'user'
    },
    token: String,
    });

userSchema.statics.list = async function () {
    return await this.find()
}

userSchema.statics.get = async function (id) {
    return await this.findById(id)
}

userSchema.statics.create = async function ({name, email, password, token}) {
    const user = new this({name, email, password, token})
    return await user.save()
}

userSchema.statics.update = async function (id, user) {
    return await this.findByIdAndUpdate(id, user)
}

userSchema.statics.delete = async function (id) {
    return await this.findByIdAndDelete(id)
}

userSchema.statics.login = async function (email, password) {
    return await this.findOne({email: email, password: password})
}

userSchema.statics.logout = async function (id) {
    return await this.findByIdAndUpdate(id, {token: null})
}

module.exports = userSchema;