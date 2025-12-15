const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const bookingRouter = require("./routes/bookingRouter");
const contactRouter = require("./routes/contactRouter");
const authRouter = require("./routes/authRouter");

const app = express();
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("mongodb database connected"))
  .catch((err) => console.log("database is not connected", err));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/booking", bookingRouter);
app.use("/api/contact", contactRouter);
app.use("/api/auth", authRouter);

app.use(express.static(path.resolve(__dirname, "./client/dist"))); // image, css, index.html(localhost:4000)
app.get("{*splat}", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/dist/index.html")); //localhost:4000/vehicles/train
});

app.listen(process.env.PORT, () => {
  console.log(`YOUR PORT ${process.env.PORT}`);
});
