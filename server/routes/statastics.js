const express = require("express");
const router = express.Router();
const Item = require("../models/Items");
const { fetchAssistant } = require("../middleware/fetchUser");

router.post("/getCount", fetchAssistant, async (req, res) => {
  try {
    const { lab, category, specification } = req.body;
    console.log("lab:", lab);
    console.log("category:", category);
    console.log("specification:", specification);

    if (lab && category && specification) {
      console.log("1");
      const count = await Item.find({
        $and: [
          { lab: lab },
          { $and: [{ category: category }, { specification: specification }] },
        ],
      }).count();
      return res.status(200).json(count);
    } else if (lab && category) {
      console.log("2");
      const count = await Item.find({
        $and: [{ lab: lab }, { category: category }],
      }).count();
      return res.status(200).json(count);
    } else if (category && specification) {
      console.log("3");
      const count = await Item.find({
        $and: [{ category: category }, { specification: specification }],
      }).count();
      return res.status(200).json(count);
    } else if (lab && specification) {
      console.log("4");
      const count = await Item.find({
        $and: [{ lab: lab }, { specification: specification }],
      }).count();
      return res.status(200).json(count);
    } else if (lab) {
      console.log("5");
      const count = await Item.find({ lab: lab }).count();
      return res.status(200).json(count);
    } else if (category) {
      console.log("6");
      console.log("here");
      const count = await Item.find({ category: category });
      return res.status(200).json(count);
    } else if (specification) {
      console.log("7");
      const count = await Item.find({ specification: specification }).count();
      return res.status(200).json(count);
    }
    console.log("g");
    const count = await Item.find().count();
    return res.status(200).json(count);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Internal server error." });
  }
});

module.exports = router;
