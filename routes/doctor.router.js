const express = require("express");
const doctorController = require("../controllers/doctor.controller");

const doctorRouter = express.Router();
doctorRouter.post("/create", doctorController.addDoctor);

module.exports = doctorRouter;