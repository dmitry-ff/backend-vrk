const express = require("express");
const houseCallController = require("../controllers/houseCall.controller");

const houseCallRouter = express.Router();
houseCallRouter.post("/create", houseCallController.addHouseCall);
houseCallRouter.post("/", houseCallController.getHouseCalls);
houseCallRouter.get("/:id", houseCallController.getHouseCall);
houseCallRouter.put("/:id", houseCallController.updateHouseCall);
houseCallRouter.delete("/delete", houseCallController.deleteHouseCall);


module.exports = houseCallRouter;