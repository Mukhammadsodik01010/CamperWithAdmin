const mongoose = require("mongoose")


const CampingPlace = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        location:String,
        openingHour:String,
        closingHour:String,
        phoneNumber:String,
        website:String,
        description:String
    },
    {
        timestamps:true
    }
)



module.exports = mongoose.model("CampingProduct", CampingPlace)