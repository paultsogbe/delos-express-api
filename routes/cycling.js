const express = require("express");
const router = express.Router();

router.post("/ask", (req, res) => {
    const randomResponse = "CYCLING " + Math.floor(Math.random() * 20);
    res.send(randomResponse);
});

module.exports = router;
