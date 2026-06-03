const Bookings = require('../models/Bookings');
const Buses = require('../models/Buses');
const Users = require('../models/Users');

const addBooking = async (req, res)=>{
    // { "userId": 1, "busId": 1, "seatNumber": 10 }
    try{
        const { userId, busId, seatNumber } = req.body;
       
        const user = await Users.findByPk(userId);
        const bus = await Buses.findByPk(busId);

        if(!user) return res.status(404).send("User not found!");
        if(!bus) return res.status(404).send("Bus not found!");

        const booking = await Bookings.create({
            UserId: userId,
            seatNumber,
            BusId:busId
        });

        res.status(200).json({message: "Booking created successfully!", booking});
    }catch(err){
        res.status(500).send("Failed to add booking! Error: " +  err);
    }

};

module.exports = {
    addBooking,
}