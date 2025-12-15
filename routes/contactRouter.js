const express = require("express");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    // console.log(req.body.contact);
    res.send({ message: "success request" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});
module.exports = router;
