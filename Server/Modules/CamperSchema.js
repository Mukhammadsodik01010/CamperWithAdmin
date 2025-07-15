const mongoose = require("mongoose");

const AddNewCamper = new mongoose.Schema(
  {
    type: String,
    name: String,
    brand: String,
    ranking: String,
    cost: String,
    company: String,
    lycynce: String,
    people: String,
    location: String,
    year: String,
    description1: String,
    description2: String,
    description3: String,
    description4: String,
    description5: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", AddNewCamper);
