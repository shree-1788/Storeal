const mongoose = require("mongoose");

const mongoURI = process.env.URL;
const connectToMongo = () => {
  mongoose.connect(
    mongoURI,
    // useNewUrlParser: true,
    // useFindAndModify: false,
    // useUnifiedTopology: true,
    console.log("Connected")
  );
};

module.exports = connectToMongo;
