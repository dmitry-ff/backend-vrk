const {Referral, Patient, Inspection} = require("../models");

exports.addReferral = async function(req, res) {
  if(!req.body) {
    res.status(400).send({
      message: "Contetn can not be empty!",
    });
    return;
  }
  try {
    const ref = await Referral.create(req.body);
    await ref.createInspection();
    res.send(ref);
  } catch (err) {
    res.status(500).send({
    message: err.message || "Some error occured while create the OutpatientExamination"})
  }
}

exports.updateReferral = function(req, res) {
  if(!req.body) {
    res.status(400).send({
      message: "Contetn can not be empty!",
    });
    return;
  }
  Referral.update(req.body, {where: {id: req.params.id}})
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while create the OutpatientExamination"
      })
    })
}

exports.getReferrals = function(req, res) {
  if(!req.body) {
    res.status(400).send({
      message: "Contetn can not be empty!",
    });
    return;
  }
  Referral.findAll({include: Patient})
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while create the OutpatientExamination"
      })
    })
}

exports.getReferral = function(req, res) {
  if(!req.body) {
    res.status(400).send({
      message: "Contetn can not be empty!",
    });
    return;
  }
  Referral.findByPk(req.params.id)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while create the OutpatientExamination"
      })
    })
}

exports.deleteRefferal = function(req, res) {
  if(!req.body) {
    res.status(400).send({
      message: "Contetn can not be empty!",
    });
    return;
  }
  Referral.destroy(req.params.id)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while create the OutpatientExamination"
      })
    })
}