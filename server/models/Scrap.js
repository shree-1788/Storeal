const mongoose = require("mongoose");
const { Schema } = mongoose;
const scrapSchema = new Schema({
  date: {
    type: String,
    default: new Date().toLocaleDateString(),
  },
  lab: {
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
  configurationNumber: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("scrap", scrapSchema);
