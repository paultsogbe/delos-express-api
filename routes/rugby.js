const express = require("express");
const router = express.Router();

router.post("/ask", (req, res) => {
    // Répondre à la question de l'utilisateur pour le rugby
    const randomResponse = "RUGBY " + Math.floor(Math.random() * 20);
    res.send(randomResponse);
});

module.exports = router;
