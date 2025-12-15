const express = require("express");

const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    // console.log(req.body.accountDetails);

    res.send({ message: "success" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    // console.log(req.body.details);
    res.send({ message: "success" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

router.get("/logout", async (req, res) => {
  try {
    res.send({ message: "logout successful" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = router;
