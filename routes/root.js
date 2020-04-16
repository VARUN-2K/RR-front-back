const route = require('express').Router()
const Users = require('../db').Users
const passport = require('../passport')


route.get('/login' , (req,res)=>{
    res.redirect('/login.html')
})

route.get('/signup' , (req,res)=>{
    res.redirect('/signup.html')
})

route.post('/login' , passport.authenticate('local' , {
    failureRedirect : '/login.html',
    successRedirect : '/private'
}))

route.post('/signup' , (req,res)=>{
    Users.create({
        username : req.body.username,
        password : req.body.password,
        firstName : req.body.firstName,
        lastName : req.body.lastName
    }).then((createdUser)=>{
        res.redirect('/login.html')
    })
})

exports = module.exports = route;
