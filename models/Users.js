const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/db-connection');

const Users = sequelize.define('Users',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Users;