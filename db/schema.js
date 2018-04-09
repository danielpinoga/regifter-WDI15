const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
    username: String,
    text: String,
    first_name: String,
    last_name: String,
    photo_url: String
})