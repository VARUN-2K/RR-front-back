const express = require('express');
const app = express();
const session = require('express-session')
const passport = require('./passport')
const rootRoute = require('./routes/root')

app.use(express.json());
app.use(express.urlencoded({extended : 'true'}))

app.use(session({
    secret : 'somesecretstring'
}))
app.use(passport.initialize())
app.use(passport.session())


app.use('/' , express.static(__dirname + "/public"))

app.use('/root' , rootRoute)



app.use('/api' , require('./routes/api').route)
app.use('/private' , require('./routes/private').route)

app.listen(1956 , function(){
    console.log("server started")
})