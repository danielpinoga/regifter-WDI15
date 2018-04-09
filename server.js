const express = require('express')
const hbs = require('hbs')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'hbs');

app.listen(3000, () => {
    console.log("Listening on port 3000")
})

app.get("/", (req, res) => {
    res.redirect("/users")
})

const User = require("./models/User")
app.get("/users", (req, res) => {
    User.find({})
        .then((users) => {
            console.log("USERS", users)
            res.render("users/index", {
                users
            })
        })
})