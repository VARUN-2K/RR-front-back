const route = require('express').Router()

route.get('/' , (req,res)=>{
    if(req.user){
        res.redirect('/manageLogged.html')
    }
    else{
        res.redirect('/login.html')
    }
})


exports = module.exports = {
    route
}