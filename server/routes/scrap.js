const express = require("express");
const Scrap = require("../models/Scrap");
const router = express.Router();
const { fetchStaff } = require("../middleware/fetchUser");

router.get("/getScrap", fetchStaff, async (req, res) => {
  try {
    const scrapItems = await Scrap.find();
    return res.status(200).json(scrapItems);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Internal server error." });
  }
});

module.exports = router;
