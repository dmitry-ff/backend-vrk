const express = require("express");
const cardController = require("../controllers/card.controller");

const cardRouter = express.Router();
cardRouter.post("/create", cardController.addCard);
cardRouter.get("/", cardController.getCards);
cardRouter.put("/:id",cardController.updateCard);
cardRouter.get("/:id", cardController.getCard)

module.exports = cardRouter;