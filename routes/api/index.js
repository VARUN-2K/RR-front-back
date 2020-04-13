const route = require('express').Router()

route.use('/contactinfo' , require('./contactinfo'))

exports = module.exports = route