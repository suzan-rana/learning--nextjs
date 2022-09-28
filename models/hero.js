const mongoose = require('mongoose')

const HeroSchema = mongoose.Schema({
    superhero: {
        type: String,
        required: true,
        unique: true,
    },
    realName: {
        type: String,
        required: true,
        unique: true,
        maxlength: [200, 'Please keep real name short.']
    }
})

module.exports = mongoose.models.Hero ||mongoose.model('Hero', HeroSchema)


// nextjs runs a file many times 