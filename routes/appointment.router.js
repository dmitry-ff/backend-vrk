const express = require("express");
const appointmentController = require("../controllers/appointment.controller");

const appointmentRouter = express.Router();

appointmentRouter.get("/", appointmentController.getAppointments);
appointmentRouter.put("/updateStatus", appointmentController.updateAppointment)
appointmentRouter.post("/create", appointmentController.addAppointment);

module.exports = appointmentRouter;