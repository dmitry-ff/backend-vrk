const {OutpatientExamination} = require("../models");

exports.addOutpatientExamination = function(req, res) {
  if(!req.body) {
    res.status(400).send({
      message: "Contetn can not be empty!",
    });
    return;
  }
  
OutpatientExamination.create((req.body))
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    res.status(500).send({
      message: err.message || "Some error occured while create the OutpatientExamination"
    })
  })
}

exports.getOutPatentExaminations = function(req, res) {
  OutpatientExamination.findAll()
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    res.status(500).send({
      message: err.message || "Some error occured while create the OutpatientExamination"
    })
  })
}

exports.getOutPatentExamination = function(req, res) {
  OutpatientExamination.findByPk(req.params.id)
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    res.status(500).send({
      message: err.message || "Some error occured while create the OutpatientExamination"
    })
  })
}