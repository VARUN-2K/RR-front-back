const express = require('express');
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended : 'true'}))

app.use('/' , express.static(__dirname + "/public"))

app.use('/api' , require('./routes/api').route)

app.listen(1956 , function(){
    console.log("server started")
})