const express = require("express");
const router = express.Router();
const ProductsMaster = require("../models/ProductsMaster");
const { fetchAssistant, fetchStaff } = require("../middleware/fetchUser");

// Route 1 : Generate a request using POST : login required
router.post("/addCategory", fetchAssistant, async (req, res) => {
  try {
    const { category } = req.body;

    let Category = await ProductsMaster.findOne({ category });
    if (Category) {
      return res.status(403).json({ message: "Category already exists." });
    }
    Category = new ProductsMaster({
      category,
    });
    const newCategory = await Category.save();
    return res.status(200).json(newCategory);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Internal server error occured." });
  }
});

// Route 2 : Fetch all Category using GET : login required
router.get("/getCategory", fetchStaff, async (req, res) => {
  try {
    let category = await ProductsMaster.find();
    return res.status(200).json(category);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Internal server error." });
  }
});


module.exports = router;