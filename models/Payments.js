const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/db-connection');

const Payments = sequelize.define('Payments',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    status:{
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Payments;