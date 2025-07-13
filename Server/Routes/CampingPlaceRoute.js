const express = require('express')
const { AddPlace, GetAllPlacess, DelateCampingProduct, GetOnePlaceById, UpdateCampingProduct } = require('../Controllers/campingPlaceController')

const CampingRouter = express.Router()


CampingRouter.post("/camping-place-add", AddPlace)
CampingRouter.get("/camping-place-getall", GetAllPlacess)
CampingRouter.get("/camping-place-getOne/:id", GetOnePlaceById)
CampingRouter.put("/camping-place-update/:id", UpdateCampingProduct)
CampingRouter.delete("/camping-place-delete/:id", DelateCampingProduct)



module.exports = CampingRouter;

