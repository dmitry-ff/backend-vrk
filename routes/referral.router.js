const express = require("express");
const referralController = require("../controllers/referral.controller");

const referralRouter = express.Router();

referralRouter.get("/", referralController.getReferrals);
referralRouter.get("/:id", referralController.getReferral);
referralRouter.post("/create", referralController.addReferral);
referralRouter.put("/update/:id", referralController.updateReferral);
referralRouter.delete("/delete/:id", referralController.deleteRefferal);

module.exports = referralRouter;