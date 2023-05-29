const express = require("express");
const doctorController = require("../controllers/doctor.controller");
const authMiddleware = require("../middleware/authMiddleware");

const doctorRouter = express.Router();
doctorRouter.post("/create", doctorController.addDoctor);
doctorRouter.post("/login", doctorController.login);
doctorRouter.get("/auth", authMiddleware, doctorController.check);

module.exports = doctorRouter;