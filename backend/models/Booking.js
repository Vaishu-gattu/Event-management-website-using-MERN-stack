const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName:  { type: String, required: true },
  email:     { type: String, required: true },
  phone:     { type: String, required: true },
  eventType: { type: String, required: true },
  eventDate: { type: String, required: true }, // This replaces 'date'
  location:  { type: String, required: true },
  guestCount:{ type: String, required: true },
  budget:    { type: String, required: true },
  message:   { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);
