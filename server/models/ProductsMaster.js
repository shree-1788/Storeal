const mongoose = require("mongoose");
const { Schema } = mongoose;

const productsMasterSchema = new Schema({
  // serialNo: {
  //   type: Number,
  //   required: true,
  // },
  category: {
    type: String,
    required: true,
  },
});

const ProductMaster = mongoose.model("productsMaster", productsMasterSchema);
module.exports = ProductMaster;
