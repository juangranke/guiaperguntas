const Sequelize = require('sequelize')

const connection = new Sequelize('guiaperguntas', 'root', '3663', {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {"useUTC":false}, 
    "timezone":"-03:00"
})

module.exports = connection