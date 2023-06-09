const {Patient} = require("../models");

exports.getPatients = function(req, res) {
  if(!req.body) {
    res.status(400).send({
      message: "Contetn can not be empty!",
    });
    return;
  }
  Patient.findAll()
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while create the OutpatientExamination"
      })
    })
}

exports.getPatient = function(req, res) {
  if(!req.body) {
    res.status(400).send({
      message: "Contetn can not be empty!",
    });
    return;
  }
  Patient.findByPk(req.params.id)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while create the OutpatientExamination"
      })
    })
}

exports.addPatient = function(req, res) {
  if(!req.body) {
    res.status(400).send({
      message: "Contetn can not be empty!",
    });
    return;
  }
  Patient.create(req.body)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while create the OutpatientExamination"
      })
    })
}

exports.updatePatient = function(req, res) {
  if(!req.body) {
    res.status(400).send({
      message: "Contetn can not be empty!",
    });
    return;
  }
  Patient.update(req.body, {where: {id: req.params.id}})
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    res.status(500).send({
      message: err.message || "Some error occured while create the OutpatientExamination"
    })
  })
}

exports.deletePatient = function(req, res) {
  if(!req.body) {
    res.status(400).send({
      message: "Contetn can not be empty!",
    });
    return;
  }
  Patient.destroy({
    where: {id: req.params.id}
  })
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while create the OutpatientExamination"
      })
    })
}