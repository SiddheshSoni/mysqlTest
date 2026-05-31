const express = require('express');
const router = express.Router();
const studentControllers = require("../controllers/studentsController");

router.post("/add", studentControllers.addEntries );
router.put('/update/:id', studentControllers.updateEntry);
router.delete('/delete/:id', studentControllers.deleteEntry);
module.exports = router;