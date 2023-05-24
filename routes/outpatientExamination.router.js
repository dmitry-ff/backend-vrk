const express = require("express");
const outpatientExaminationController = require("../controllers/outpatientExamination.controller")

const outpatientExaminationRouter = express.Router();

outpatientExaminationRouter.post("/create", outpatientExaminationController.addOutpatientExamination);
outpatientExaminationRouter.get("/", outpatientExaminationController.getOutPatentExaminations);
outpatientExaminationRouter.get("/:id", outpatientExaminationController.getOutPatentExamination);

module.exports = outpatientExaminationRouter;