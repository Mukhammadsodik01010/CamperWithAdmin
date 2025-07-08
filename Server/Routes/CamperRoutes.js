const express = require("express");
const { CaravanAdd, CaravanGetAll, CaravanOneData, CaravanUpdateById, CaravanDelete } = require("../Controllers/Camper.controller");

const router = express.Router()

router.post("/caravan", CaravanAdd)
router.get("/caravan-all-data", CaravanGetAll)
router.get("/caravan-one-by-id/:id", CaravanOneData)
router.put("/caravan-update/:id", CaravanUpdateById)
router.delete("/caravan-delete/:id", CaravanDelete)

module.exports = router;