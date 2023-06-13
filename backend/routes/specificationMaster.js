const express = require("express");
const router = express.Router();
const SpecificationMaster = require("../models/SpecificationMaster");
const { fetchAssistant, fetchStaff } = require("../middleware/fetchUser");

// Route 1 : Generate a specification using POST : login required
router.post("/addSpecification", fetchAssistant, async (req, res) => {
  try {
    const { category, specification } = req.body;

    let Specification = await SpecificationMaster.findOne({ specification });

    if (Specification) {
      return res.status(403).json({ message: "Specification already exists." });
    }

    Specification = new SpecificationMaster({
      specification,
      category,
    });
    const newSpecification = await Specification.save();
    return res.status(200).json(newSpecification);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Internal server error occured." });
  }
});

// Route 2 : Fetch all specification using GET : login required
router.get("/getSpecification", fetchStaff, async (req, res) => {
  try {
    // const { category } = req.body;
    // if (category) {
    //   let specification = await SpecificationMaster.find({ category });
    //   return res.status(200).json(specification);
    // }
    let specification = await SpecificationMaster.find();
    return res.status(200).json(specification);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Internal server error." });
  }
});

router.get("/getSpecification/:category", fetchStaff, async (req, res) => {
  try {
    // const { category } = req.body;
    // if (category) {
    //   let specification = await SpecificationMaster.find({ category });
    //   return res.status(200).json(specification);
    // }
    let specification = await SpecificationMaster.find({category : req.params.category});
    return res.status(200).json(specification);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Internal server error." });
  }
});

// Route 3 : Update specification using PUT : login required
router.put("/updateSpecification/:id", fetchAssistant, async (req, res) => {
  try {
    const { Specification } = req.body;
    const updatedSpecification = {};
    if (Specification) {
      updatedSpecification.Specification = Specification;
    }

    let specification = await SpecificationMaster.findById(req.params.id);
    if (!specification) {
      return res.status(400).json({ message: "Specification not found." });
    }
    const update = await SpecificationMaster.findByIdAndUpdate(
      req.params.id,
      { $set: updatedSpecification },
      { new: true }
    );
    return res.status(200).json(update);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Internal server error." });
  }
});

// Route 4 : Delete specification using DELETE : login required
router.delete("/deleteSpecification/:id", fetchAssistant, async (req, res) => {
  try {
    let specification = await SpecificationMaster.findById(req.params.id);
    if (!specification) {
      return res.status(400).json({ message: "specification not found." });
    }
    request = await SpecificationMaster.findByIdAndDelete(req.params.id);
    return res
      .status(200)
      .json({ message: "Specification has been deleted successfully." });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Internal server error occured." });
  }
});

module.exports = router;