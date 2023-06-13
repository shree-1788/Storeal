const express = require("express");
const router = express.Router();
const Complaint = require("../models/Complaint");
const { fetchStaff } = require("../middleware/fetchUser");
const { body, validationResult } = require("express-validator");

// Route 1 : Register complaints using post : Login required
router.post(
  "/registerComplaint",
  fetchStaff,
  [body("studentId").isLength({ max: 11 }), body("email").isEmail()],
  async (req, res) => {
    try {
      const {
        lab,
        configurationNumber,
        category,
        complaintHandler,
        level,
        studentId,
        email,
        description,
      } = req.body;
      const complaint = new Complaint({
        lab,
        configurationNumber,
        category,
        complaintHandler,
        level,
        studentId,
        email,
        description,
      });
      const addComplaint = await complaint.save();
      return res
        .status(200)
        .json({ Message: "Complaint added.", addComplaint });
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ message: "Internal server error." });
    }
  }
);

// Route 2 : Get complaints using get : Login required
router.get("/getComplaint", fetchStaff, async (req, res) => {
  try {
    let complaints = await Complaint.find();
    return res.status(200).json(complaints);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ messsage: "Internal server error." });
  }
});

// Route 3 : Update request using PUT : Login required : Id should be provided in header.
router.put("/updateComplaint/:id", fetchStaff, async (req, res) => {
  try {
    const {
      lab,
      configurationNumber,
      category,
      complaintHandler,
      level,
      studentId,
      email,
      description,
    } = req.body;

    const updatedComplaint = {};
    if (lab) {
      updatedComplaint.lab = lab;
    }
    if (configurationNumber) {
      updatedComplaint.configurationNumber = configurationNumber;
    }
    if (category) {
      updatedComplaint.category = category;
    }
    if (complaintHandler) {
      updatedComplaint.complaintHandler = complaintHandler;
    }
    if (level) {
      updatedComplaint.level = level;
    }
    if (studentId) {
      updatedComplaint.studentId = studentId;
    }
    if (email) {
      updatedComplaint.email = email;
    }
    if (description) {
      updatedComplaint.description = description;
    }

    let complaint = await Complaint.findById(req.params.id);
    if (!complaint) {
      return res.status(400).json({ message: "Complaint not found." });
    }

    const update = await Complaint.findByIdAndUpdate(
      req.params.id,
      { $set: updatedComplaint },
      { new: true }
    );
    res
      .status(200)
      .json({ message: "Complaint updated successfully.", update });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal server error." });
  }
});

// Route 4 : Delete request using Delete : Login required : Id should be provided in header.
router.delete("/deleteComplaint/:id", fetchStaff, async (req, res) => {
  try {
    let complaint = await Complaint.findById(req.params.id);
    if (!complaint) {
      return res.status(400).json({ message: "Complaint not found." });
    }
    request = await Complaint.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "Complaint deleted." });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Internal server error." });
  }
});

module.exports = router;
