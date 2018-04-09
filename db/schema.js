const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
    username: String,
    email: String,
    first_name: String,
    last_name: String,
    photo_url: String,
    stores: [Store]
})

const Store = new Schema({
    name: String,
    address: String,
    gifts: [Gift]
})

const Gift = new Schema({
    name: String,
    description: String,
    price: Number,
    gift_giver: String
})

module.exports = {
    User,
    Store,
    Gift
}