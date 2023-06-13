const mongoose = require("mongoose");
const { Schema } = mongoose;
const RequestSchema = new Schema({
  bill : {
    type : String,
    default : "#",
  },
  category: {
    type: String,
    required: true,
  },
  specification: {
    type: String,
    required: true,
  },
  lab: {
    type: String,
    required: true,
  },

  requiredQuantity: {
    type: Number,
    required: true,
  },
  recievedQuantity: {
    type: Number,
    default: 0,
  },
  date: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "Pending",
  },
});

module.exports = mongoose.model("request", RequestSchema);
