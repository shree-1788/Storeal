const mongoose = require("mongoose");
const { Schema } = mongoose;

const specificationMasterSchema = new Schema({
  category: {
    type: String,
    required: true,
  },
  specification: {
    type: String,
    required: true,
  },
});

const specificationMaster = mongoose.model(
  "specificationMaster",
  specificationMasterSchema
);

module.exports = specificationMaster;
