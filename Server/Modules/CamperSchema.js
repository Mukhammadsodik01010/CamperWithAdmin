const mongoose = require("mongoose");


const AddNewCamper = new mongoose.Schema(
    {
    name: String,
    brand: String,
    cost: Number,
    year: Number,
    ranking: Number,
    berths: Number,
    length: String,
    location: String,
    type: String,
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model("Product", AddNewCamper)