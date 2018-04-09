const express = require('express')
const hbs = require('hbs')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

app.set('view engine', 'hbs');
app.use(express.static(`${__dirname}/public`))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
} else {
    mongoose.connect("mongodb://localhost/regifter")
}

mongoose.connection.once('open', () => {
    console.log(`Mongoose has connected to MongoDB`)
})

mongoose.connection.on('error', (error) => {
    console.error(`
    MongoDB connection error!!! 
    ${error}
  `)
    process.exit(-1)
})

app.get("/", (req, res) => {
    console.log("Hitting Index Route")
    res.redirect("/users")
})

const User = require("./models/User")
app.get("/users", (req, res) => {
    console.log("Hitting Users Route")
    User.find({})
        .then((users) => {
            console.log("USERS", users)
            res.render("users/index", {
                users
            })
        })
})