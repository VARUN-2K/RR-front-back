const Sequelize = require('sequelize')

const db = new Sequelize('rrmessage' , 'rrwebsite' , '12345' , {
    host : 'localhost',
    dialect : 'mysql',
    pool : {
        min : 0,
        max : 4
    }
})

const ContactInfo = db.define('ContactInfo' , {
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    name : {
        type : Sequelize.STRING,
        allowNull : false
    },
    email : {
        type : Sequelize.STRING,
        allowNull : false
    },
    phone : {
        type : Sequelize.STRING,
        allowNull : false
    },
    message : {
        type : Sequelize.STRING ,
         allowNull : false
    }

})

db.sync()
   .then(() => console.log("Database has been created"))
   .catch((err) => console.log("Error creating database"))

exports = module.exports = {
    ContactInfo
}