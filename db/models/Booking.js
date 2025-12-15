const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name: String,
  address: String,
  boarding: String,
  destination: String,
  date: String,
  type: String,
  passenger: String,
  price: String,
  payment: String,
});
module.exports = mongoose.model("Booking", bookingSchema);
