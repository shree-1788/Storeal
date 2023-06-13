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

// Route 3 : Update request using PUT : login required
router.put("/updateCategory/:id", fetchAssistant, async (req, res) => {
  try {
    const { index } = req.body;
    const updatedRequest = {};
    if (name) {
      updatedRequest.name = name;
    }
    if (quantity) {
      updatedRequest.quantity = quantity;
    }
    if (status) {
      updatedRequest.status = status;
    }

    let request = await Request.findById(req.params.id);
    if (!request) {
      return res.status(400).json({ message: "Request not found." });
    }
    const update = await Request.findByIdAndUpdate(
      req.params.id,
      { $set: updatedRequest },
      { new: true }
    );
    return res.status(200).json(update);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Internal server error." });
  }
});

// Route 4 : Delete request using DELETE : login required
router.delete("/deleteRequest/:id", fetchAssistant, async (req, res) => {
  try {
    let request = await Request.findById(req.params.id);
    if (!request) {
      return res.status(400).json({ message: "Request not found." });
    }
    request = await Request.findByIdAndDelete(req.params.id);
    return res
      .status(200)
      .json({ message: "Request has been deleted successfully." });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Internal server error occured." });
  }
});

module.exports = router;
