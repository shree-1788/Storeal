const express = require("express");
const router = express.Router();
const User = require("../models/Staff");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const { fetchStaff } = require("../middleware/fetchUser");
const Staff = require("../models/Staff");
const bcrypt = require("bcrypt");

//Authenticate a user using POST, No login required.
router.post(
  "/login/",
  [
    // A username must be there
    body("email", "Enter a valid email").isEmail(),
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res
          .status(500)
          .json({ message: "Please try to login with correct credentials" });
      }

      const authToken = jwt.sign(
        { _id: user._id, lab: user.lab, role: user.role },
        process.env.SECRET_TOKEN
      );

      return res.status(200).json({ authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error");
    }
  }
);

// Add a user using POST, Admin must be login
router.post("/signup", async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { name, role, lab, phone, email, password, confirmPassword } =
      req.body;
    let user = await User.findOne({ email });
    if (user) {
      return res
        .status(403)
        .json({ message: "User with this email already exists." });
    }

    if (password !== confirmPassword) {
      return res.status(500).json({ message: "Password not matching" });
    }

    const salt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(password, salt);

    user = new User({
      name,
      role,
      lab,
      phone,
      email,
      password: hashedPassword,
      confirmPassword: hashedPassword,
    });

    const newUser = await user.save();

    res.status(200).json(newUser);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal server error." });
  }
});

// Route 3 : Get users using GET : login required
router.get("/getStaff", fetchStaff, async (req, res) => {
  try {
    let staff = await Staff.find();
    return res.status(200).json(staff);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal server error occurred." });
  }
});

// Route to get lab of staff using GET : login required
router.get("/getLab", fetchStaff, async (req, res) => {
  try {
    const lab = req.rootUser.lab;
    if (lab === "Not applicable") {
      return res.status(200).json({ lab: "Enter lab number" });
    }
    return res.status(200).json({ lab: lab });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/getRole", fetchStaff, async (req, res) => {
  try {
    const role = req.rootUser.role;
    return res.status(200).json({ role });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
});
module.exports = router;
