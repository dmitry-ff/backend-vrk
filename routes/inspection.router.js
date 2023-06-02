const express = require("express");
const inspectionController = require("../controllers/inspection.controller")

const inspectionRouter = express.Router();

inspectionRouter.post("/create", inspectionController.addInspection);
inspectionRouter.get("/", inspectionController.getInspections);
inspectionRouter.get("/:id", inspectionController.getInspectionById);

module.exports = inspectionRouter;