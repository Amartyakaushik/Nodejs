const { Sequelize } = require('sequelize');

// Initiallize sequelize with your postgresql database credentials
// here the first parameter is the name of the Databse, second parameter is your username and the last parameter is your password of the postman
const sequelize = new  Sequelize('todos', 'postgres', 'Amar@9872', {
    host: 'localhost',
    dialect: 'postgres',  // specify the dialect for postgreSql
});

module.exports = sequelize;