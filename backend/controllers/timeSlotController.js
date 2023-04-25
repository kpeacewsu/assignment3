// timeSlotController.js

const db = require('../models');
const TimeSlot = db.TimeSlot;

exports.getAllTimeSlots = async (req, res) => {
    try {
        const timeSlots = await TimeSlot.findAll({
            order: [['startTime', 'ASC']],
        });

        res.status(200).json(timeSlots);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
