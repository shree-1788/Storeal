const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const connectToMongo = require("./db");

connectToMongo();
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

const app = express();
const port = process.env.PORT;

app.use(express.json());

//Available routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/items", require("./routes/items"));
app.use("/api/centralTable", require("./routes/centralTable"));
app.use("/api/request", require("./routes/requests"));
app.use("/api/Complaint", require("./routes/complaints"));
app.use("/api/productMaster", require("./routes/productMaster"));
app.use("/api/specificationMaster", require("./routes/specificationMaster"));
app.use("/api/statistics", require("./routes/statastics"));
app.use("/api/scrap", require("./routes/scrap"));

app.get("/", (req, res) => {
  res.send("Welcome to Inventory Management System of DMCE");
});

app.listen(port, () => {
  console.log(`Inventory app listening at http://localhost:${port}`);
});
