const express = require('express');
const studentController = require('../controllers/studentController');

const router = express.Router();

router.post('/register', studentController.registerStudent);
router.get('/registered', studentController.getRegisteredStudents);
router.delete('/:id',studentController.cancelReservation);
module.exports = router;