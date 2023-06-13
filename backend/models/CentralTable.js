const mongoose = require("mongoose");
const { Schema } = mongoose;
const CentralTableSchema = new Schema({
  bill: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  specification: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    default: 0,
  },
  cost: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
  },
});

module.exports = mongoose.model("centralTable", CentralTableSchema);