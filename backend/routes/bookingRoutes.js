const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// POST: Create new booking
router.post('/', async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      eventType,
      eventDate,
      location,
      guestCount,
      budget,
      message,
    } = req.body;

    // Basic validation
    if (!firstName || !lastName || !email || !phone || !eventType || !eventDate) {
      return res.status(400).json({ message: 'Required fields are missing' });
    }

    const newBooking = new Booking({
      firstName,
      lastName,
      email,
      phone,
      eventType,
      eventDate,
      location,
      guestCount,
      budget,
      message,
    });

    await newBooking.save();
    res.status(201).json({ message: 'Booking submitted successfully' });
  } catch (err) {
    console.error('Error creating booking:', err);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// GET: Retrieve all bookings (Admin/Management usage)
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    console.error('Error fetching bookings:', err);
    res.status(500).json({ message: 'Failed to fetch bookings' });
  }
});

module.exports = router;
