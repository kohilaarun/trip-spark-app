const express = require("express");
const Booking = require("../db/models/Booking");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const booking = new Booking(req.body.bookingDetails);
    const createdBooking = await booking.save();
    res.send({ createdBooking });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.send({ bookings });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    res.send({ booking });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    await Booking.findByIdAndUpdate(req.params.id, req.body.bookingDetails);
    const booking = await Booking.findById(req.params.id);
    res.send({ booking });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedUser = await Booking.findByIdAndDelete(req.params.id);
    res.send({ deletedUser });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = router;
