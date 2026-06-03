const Users = require('./Users');
const Bookings = require('./Bookings');
const Buses = require('./Buses');
const Payments = require('./Payments');

//user has many bookings
Users.hasMany(Bookings);
Bookings.belongsTo(Users);

//Bus can have multiple bookings
Buses.hasMany(Bookings);
Bookings.belongsTo(Buses);


module.exports = {
    Users,
    Bookings,
    Buses,
    Payments
}