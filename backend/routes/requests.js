const express = require("express");
const router = express.Router();
const Request = require("../models/Request");
const { fetchStaff } = require("../middleware/fetchUser");

// Route 1 : Generate a request using POST : login required
router.post("/generateRequest", fetchStaff, async (req, res) => {
  try {
    let { category, specification, lab, requiredQuantity, date } = req.body;
    requiredQuantity = Number(requiredQuantity);
    const request = new Request({
      category,
      specification,
      lab,
      requiredQuantity,
      date,
    });
    const generatedRequest = await request.save();
    return res.status(200).json(generatedRequest);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Internal server error occured." });
  }
});

// Route 2 : Fetch all requests using GET : login required
router.get("/getRequest/:lab", fetchStaff, async (req, res) => {
  try {
    let requests;
    if (req.params.lab === "Not applicable" || req.params.lab === "Enter lab number") {
      requests = await Request.find();
    }
    else{
      requests = await Request.find({lab:req.params.lab});
    }
    return res.status(200).json(requests);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Internal server error." });
  }
});

// Route 3 : Update request using PUT : login required
router.put("/updateRequest/:id", fetchStaff, async (req, res) => {
  try {
    const { name, quantity, status } = req.body;
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
router.delete("/deleteRequest/:id", fetchStaff, async (req, res) => {
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