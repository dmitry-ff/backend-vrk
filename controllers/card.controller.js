const {Card} = require("../models");

exports.addCard = function(req, res) {
  if(!req.body) {
    res.status(400).send({
      message: "Contetn can not be empty!",
    });
    return;
  }
  Card.create((req.body))
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while create the Card"
      })
    })
}

exports.getCards = function(req, res) {
  if(!req.body) {
    res.status(400).send({
      message: "Contetn can not be empty!",
    });
    return;
  }
  Card.findAll((req.body))
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while create the Card"
      })
    })
}

exports.getCard = function(req, res) {
  if(!req.body) {
    res.status(400).send({
      message: "Contetn can not be empty!",
    });
    return;
  }
  Card.findByPk(req.params.id)
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    res.status(500).send({
      message: err.message || "Some error occured while update the Card"
    })
  })
}

exports.updateCard = function(req, res) {
  if(!req.params.id) {
    res.status(400).send({
      message: "params can not be empty!",
    });
    return;
  }
  Card.update(
    req.body,
    {where: {id: req.params.id}}
  )
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    res.status(500).send({
      message: err.message || "Some error occured while update the Card"
    })
  })
}