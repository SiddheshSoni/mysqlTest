const express = require("express");
const router = express.Router();
const userController = require("../controllers/usersControllers");

router.get("/", userController.getUser);
router.post("/", userController.addUser );
router.delete("/:id", userController.deleteUser);
router.get('/:id/bookings', userController.getUserBookings);

module.exports = router;