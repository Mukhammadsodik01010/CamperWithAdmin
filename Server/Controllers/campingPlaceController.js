const CampingProduct = require('../Modules/Camping.place.chema')



const AddPlace = async (req, res) =>{
    const {name, location, phoneNumber, openingHour, closingHour, website, description}= req.body;
    try {
        if(!name){
            return res.status(404).json({msg:"Write name first"})
        }
        const campingProduct = new CampingProduct({name, location, phoneNumber, openingHour, closingHour, website, description})
        await campingProduct.save()
        res.json({msg:"New product added successfully"})
    } catch (error) {
        res.status(404).json({msg:"Error edding data"})
    }
}

const GetAllPlacess = async (req, res)=>{
    try {
        const campingProduct = await CampingProduct.find()
        res.json(campingProduct)
    } catch (error) {
        res.status(404).json({msg:"Error getting all data"})
    }
}

const GetOnePlaceById = async (req, res)=>{
    try {
        const campingProduct = await CampingProduct.findById(req.params.id)
        if(!campingProduct){
            return res.status(500).json({message:"item is not found"})
        }
        res.json({message:"item is coming by id ", campingProduct})
    } catch (error) {
         res.status(404).json({msg:"Error getting one data"})
    }
}

const UpdateCampingProduct = async (req, res)=>{
    try {
        const campingProduct = await CampingProduct.findByIdAndUpdate(req.params.id, req.body, {
            new:true
        })
        if(!campingProduct){
            return res.status(500).json({message:"item is not found"})
        }
        res.json({message:"Item is updated Successfully", campingProduct})
    } catch (error) {
           res.status(404).json({msg:"Error updating data"})
    }
}

const DelateCampingProduct = async (req, res)=>{
    try {
        const campingProduct = await CampingProduct.findByIdAndDelete(req.params.id)
        if(!campingProduct){
            return res.status(500).json({message:"item is not found"})
        }
        res.json({message:"Item deletes successfully"})
    } catch (error) {
        res.status(404).json({msg:"Error deleting data"})
    }
}

module.exports = { AddPlace, GetAllPlacess, DelateCampingProduct, GetOnePlaceById, UpdateCampingProduct }