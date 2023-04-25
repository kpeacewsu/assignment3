const db = require('../models');
const Student = db.Student;
const TimeSlot = db.TimeSlot;
const { validationResult } = require('express-validator');

exports.registerStudent = async (req, res) => {
  // Validate request body
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const { id, firstName, lastName, projectTitle, email, phone, timeSlotId } = req.body;

  try {
    // Find the selected time slot
    const timeSlot = await TimeSlot.findByPk(timeSlotId);

    if (!timeSlot) {
      return res.status(404).json({ error: 'Time slot not found' });
    }

    if (timeSlot.availableSeats <= 0) {
      return res.status(400).json({ error: 'Time slot is full' });
    }

    // Check if a student with the given ID has already registered for a time slot
    const existingStudent = await Student.findOne({ where: { id } });
    if (existingStudent) {
      return res.status(400).json({ error: 'Student has already registered for a time slot' });
    }

    // Create a new student record and save to the database
    const student = await Student.create({
      id,
      firstName,
      lastName,
      projectTitle,
      email,
      phone,
      timeSlotId: timeSlot.id,
    });

    // Decrement the availableSeats of the selected time slot
    timeSlot.availableSeats -= 1;
    await timeSlot.save();

    return res.status(201).json({ message: 'Student registered successfully' });
  } catch (error) {
    console.error('Error registering student:', error);
    return res.status(500).json({ error: 'Server error' });
  }
};

exports.getRegisteredStudents = async (req, res) => {
  // Fetch the list of registered students
  try {
    const students = await Student.findAll({
      include: [
        {
          model: TimeSlot,
          as: 'timeSlot',
          required: true,
          attributes: ['id', 'startTime', 'endTime', 'availableSeats'],
        },
      ],
      order: [['timeSlotId', 'ASC']],
    });
    // Send a success response with the list of registered students
    res.status(200).json({ students });
  } catch (error) {
    // Send an error response
    res.status(400).json({ message: error.message });
  }
};

// Cancel a student's reservation
exports.cancelReservation = async (req, res) => {
  const { id } = req.params;

  try {
    // Find the student with the given ID and include the time slot information
    const student = await Student.findOne({
      where: { id },
      include: [{ model: TimeSlot, as: 'timeSlot' }],
    });

    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }

    // Increment the availableSeats of the time slot associated with the student's reservation
    const timeSlot = student.timeSlot;
    timeSlot.availableSeats += 1;
    await timeSlot.save();

    // Remove the student record from the database
    await student.destroy();

    return res.json({ message: 'Reservation cancelled successfully' });
  } catch (error) {
    console.error('Error cancelling reservation:', error);
    return res.status(500).json({ error: 'Server error' });
  }
};
