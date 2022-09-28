// const mongoose = require('mongoose')
import mongoose from 'mongoose'

//creating a schema or a model 
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

// mongodb://localhost:27017/SuperHeroesDatabase
// nextjs runs a file many times 