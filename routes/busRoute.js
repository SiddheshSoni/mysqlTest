const express = require('express');
const router = express.Router();
const busController = require("../controllers/busController")

router.post("/", busController.addBus);
router.get('/availables/:id', busController.getAvailableSeats);
router.get('/:id/bookings', busController.getBusBookings);

module.exports = router;