const express = require("express");
const router = express.Router();
const Item = require("../models/Items");
const { fetchStaff } = require("../middleware/fetchUser");
const { body, validationResult } = require("express-validator");
const Scrap = require("../models/Scrap");

// Add items using POST, login required
router.post("/addItem", fetchStaff, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { lab, configurationNumber, category, specification, date } =
      req.body;
    const item = new Item({
      lab,
      configurationNumber,
      category,
      specification,
      date,
    });
    const addItem = await item.save();
    res.status(200).json(addItem);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ error: "Internal server error." });
  }
});

// Get items using GET, login required
router.post("/getItems", fetchStaff, async (req, res) => {
  try {
    let items;
    const { lab, category, specification } = req.body;
    items = await Item.find();

    if (category && specification && lab) {
      const itemsList = await Item.find({
        $and: [
          { lab: lab },
          { $and: [{ category: category }, { specification: specification }] },
        ],
      });
      return res.status(200).json(itemsList);
    } else if (category && specification) {
      // let itemsList = await items.find({
      //   $and: [{ category: category }, { subcategory: subcategory }],
      // });
      // let itemsList = items.filter((ele) => {
      //   return ele.category === category && ele.specification === specification;
      // });
      // return res.status(200).json(itemsList);
      const items = await Item.find({
        $and: [{ category: category }, { specification: specification }],
      });
      return res.status(200).json(items);
    } else if (category && lab) {
      let itemsList = await Item.find({
        $and: [{ category: category }, { lab: lab }],
      });
      // let itemsList = items.filter((ele) => {
      //   return (
      //     ele.category === category &&
      //     ele.configurationNumber === configurationNumber
      //   );
      // });
      return res.status(200).json(itemsList);
    } else if (lab && specification) {
      let itemsList = await Item.find({
        $and: [{ lab: lab }, { specification: specification }],
      });
      // let itemsList = items.filter((ele) => {
      //   return (
      //     ele.configurationNumber === configurationNumber &&
      //     ele.specification === specification
      //   );
      // });
      return res.status(200).json(itemsList);
    } else if (category) {
      let itemsList = await Item.find({ category });
      return res.status(200).json(itemsList);
    } else if (specification) {
      let itemsList = await Item.find({ specification });
      return res.status(200).json(itemsList);
    } else if (lab) {
      let itemsList = await Item.find({ lab });
      return res.status(200).json(itemsList);
    }
    return res.status(200).json(items);
  } catch (error) {
    console.log(error.message);
    res.status(500).json("Internal server error.");
  }
});

// Update items using PUT, login required
router.put("/updateItems/:id", fetchStaff, async (req, res) => {
  try {
    const { configurationNumber, category, specification, date } = req.body;
    const newItem = {};
    if (configurationNumber) {
      newItem.configurationNumber = configurationNumber;
    }
    if (category) {
      newItem.category = category;
    }
    if (specification) {
      newItem.specification = specification;
    }
    if (date) {
      newItem.date = date;
    }

    let item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(400).send("Item not found");
    }

    let update = await Item.findByIdAndUpdate(
      req.params.id,
      { $set: newItem },
      { new: true }
    );
    return res.status(200).json({ update });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json("Internal server error");
  }
});

router.delete("/deleteItems/:id", fetchStaff, async (req, res) => {
  try {
    let item = await Item.findById(req.params.id);
    let scrap = new Scrap({
      lab: item.lab,
      configurationNumber: item.configurationNumber,
      category: item.category,
      specification: item.specification,
    });
    let scrapItem = await scrap.save();
    let deletedItem = await Item.findByIdAndDelete(req.params.id);
    return res
      .status(200)
      .json({ message: "Item moved to scrap", scrapItem, deletedItem });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
