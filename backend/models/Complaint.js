const mongoose = require("mongoose");
const { Schema } = mongoose;
const complaintSchema = new Schema({
  lab: {
    type: String,
    required: true,
  },
  configurationNumber: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  complaintHandler: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  studentId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("complaint", complaintSchema);