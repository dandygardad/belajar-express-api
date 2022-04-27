const {Sequelize} = require('sequelize')

// Connecting database
const sequelize = new Sequelize("belajar_express", "postgres", "nurture", {
    host: process.env.HOSTNAME,
    dialect: "postgres"
})

module.exports = sequelize