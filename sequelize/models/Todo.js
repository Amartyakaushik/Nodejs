const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

// the first paramter is the model name itself.
const Todo = sequelize.define('Todo',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}, {
    tableName: 'todos',  // Match the table name with ur existing database table.
    // if the table is not in your  DB then it automatically creates one, and if it's already exist then it'll sync with it.  
    timestamps: false    // set it false, as our original table ('todos') doesn't contain timestamps.
});
// to update particular property of the table we use 'batch'.
module.exports = Todo; 
