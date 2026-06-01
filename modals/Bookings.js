const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/db-connection');

const Bookings = sequelize.define('Bookings',{
    id:{
        type: DataTypes.INTEGER,
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

})

module.exports = Bookings;