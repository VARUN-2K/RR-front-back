const ContactInfo = require('../../db').ContactInfo;
const route = require('express').Router()

route.get('/' , (req,res)=>{
    // We want to send an array of all contact info
    // from our database

    ContactInfo.findAll()
               .then((info)=>{
                    res.status(200).send(info)
               })
               .catch((err)=>{
                   res.status(500).send({
                       error : "Could not retrieve users"
                   })
               })

})

route.post('/' , (req,res)=>{

    // We expect req to have all information in it
    // we will add extra information

    ContactInfo.create({
        name : req.body.name,
        email : req.body.email,
        phone : req.body.phone,
        message : req.body.message
    }).then((info) => {
        res.status(201).send(info)
    }).catch((err)=> {
        res.status(501).send({
            error : "Could not add new contact information"
        })
    })
        

})

route.post('/delete' , (req,res)=>{

    ContactInfo.destroy({
        where : {
            id : req.body.id
        }
    }).then(() => {
        console.log("Done")
        res.send("element deleted")
    }).catch((err)=>{
        console.log("error deleting")
        res.send("error in deleted")
    })

})

exports = module.exports = route