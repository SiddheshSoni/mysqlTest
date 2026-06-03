const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/db-connection');

const Bookings = sequelize.define('Bookings',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    seatNumber:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
})

module.exports = Bookings;