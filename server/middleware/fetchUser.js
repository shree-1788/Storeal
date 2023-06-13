const jwt = require("jsonwebtoken");
const Staff = require("../models/Staff");

const fetchStaff = async (req, res, next) => {
  try {
    const token = req.header("auth-token");
    if (!token) {
      res
        .status(401)
        .send({ error: "please authenticate using a valid token" });
    }

    const data = jwt.verify(token, process.env.SECRET_TOKEN);
    const rootUser = await Staff.findById({ _id: data._id });

    if (!rootUser) {
      return res.status(400).json({ message: "User not found" });
    }
    req.rootUser = rootUser;
    if (
      req.rootUser.role === "Lab assistant" ||
      req.rootUser.role === "Lab incharge" ||
      req.rootUser.role === "Head of department"
    ) {
      next();
    } else {
      return res.status(403).json({ message: "Unauthorize access" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ error: "Internal server error" });
  }
};

const fetchAssistant = async (req, res, next) => {
  try {
    const token = req.header("auth-token");
    if (!token) {
      return res
        .status(403)
        .json({ message: "Please authenticate using a valid token." });
    }

    const data = jwt.verify(token, process.env.SECRET_TOKEN);
    const rootUser = await Staff.findById({ _id: data._id });
    if (!rootUser) {
      return res.status(400).json({ message: "User not found." });
    }

    req.rootUser = rootUser;
    if (
      req.rootUser.role === "Lab assistant" ||
      req.rootUser.role === "Head of department"
    ) {
      next();
    } else {
      return res.status(403).json({ message: "Unauthorized access" });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Internal server error." });
  }
};

module.exports = { fetchStaff, fetchAssistant };
