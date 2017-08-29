const path = require('path')
const express = require('express')
const passport = require('passport')
const LocalStrategy = require('passport-local')
const verifyJwt = require('express-jwt')
const bodyParser = require('body-parser')

const auth = require('./lib/auth')
const apiRoutes = require('./routes/api')
const walkerRoute = require('./routes/walkerRoute')
const ownerRoute = require('./routes/ownerRoutes')
const dogRoute = require('./routes/dogRoutes')
const requestRoutes = require('./routes/requestRoutes')
const authRoutes = require('./routes/authRoutes')

const server = express()

server.use(bodyParser.json())
server.use(express.static('public'))
server.use(passport.initialize())

server.use('/api/v1/', apiRoutes)

server.use(authRoutes)
server.use('/api/v1/walkers', walkerRoute)
server.use('/api/v1/owners', ownerRoute)
server.use('/api/v1/dogs', dogRoute)
server.use('/api/v1/walkrequest', requestRoutes)

passport.use(new LocalStrategy(auth.verify))

module.exports = function(db) {
  server.set('db', db)
  return server
}
