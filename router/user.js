const express = require("express")
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({user: "Working"})
})

router.post("/wallet/connect", (req, res) => {
    const data = req.body;
    res.status(200).json({response: data})
})

module.exports = router