const express = require("express");
const patientController = require("../controllers/patient.controller");

const patientRouter = express.Router();

patientRouter.get("/", patientController.getPatients);
patientRouter.get("/:id", patientController.getPatient);
patientRouter.post("/create", patientController.addPatient);
patientRouter.put("/update/:id", patientController.updatePatient);
patientRouter.delete("/delete/:id", patientController.deletePatient);


module.exports = patientRouter;