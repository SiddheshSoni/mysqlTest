const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/db-connection');

const Payments = sequelize.define('Users',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status:{
        type: DataTypes.STRING,
        allowNull: false
    },
    busNumber:{
        type: DataTypes.INTEGER,
        allowNull:false
    }
});

module.exports = Payments;