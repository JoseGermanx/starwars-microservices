const { Schema } = require('mongoose');

const planetsSchema = new Schema({
    _id: String,
    name: String,
    rotation_period: String,
    orbital_period: String,
    diameter: String,
    climate: String,
    gravity: String,
    terrain: String,
    surface_water: String,
    population: String,
    res_idents: [{type: String, ref: 'Character'}],
    films: [{type: String, ref: 'Film'}],
    });

planetsSchema.statics.list = async function () {
    return await this.find()
    .populate('res_idents', ['name'])
    .populate('films', ['title'])
}

planetsSchema.statics.get = async function (id) {
    return await this.findById(id)
    .populate('residents', ['name'])
    .populate('films', ['title'])
}

module.exports = planetsSchema;