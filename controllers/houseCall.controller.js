const { HouseCall } = require("../models");

exports.addHouseCall = async function(req, res) {
  if(!req.body) {
    res.status(400).send({
      message: "Contetn can not be empty!",
    });
    return;
  }
  try {
    const houseCall = await HouseCall.create(req.body);
    res.status(200).send(houseCall);
  } catch(err) {
    console.log(err)
  } 
}

exports.updateHouseCall = async function(req, res) {
  if(!req.body) {
    res.status(400).send({
      message: "Contetn can not be empty!",
    });
    return;
  }
  try {
    const updatedHouseCall = await HouseCall.update({
      adress: req.body.adress,
      reason: req.body.reason
    }, {where: {id: req.params.id}});
    res.status(200).send(updatedHouseCall);
  } catch (err) {
    console.log(err)
  }
}

exports.getHouseCall = async function(req, res) {
  if(!req.body) {
    res.status(400).send({
      message: "Contetn can not be empty!",
    });
    return;
  }
  try {
    const houseCall = await HouseCall.findOne({where: {id: req.params.id}});
    res.send(houseCall);
  } catch(err) {
    console.log(err);
  }
}

exports.deleteHouseCall = async function(req, res) {
  if(!req.body) {
    res.status(400).send({
      message: "Contetn can not be empty!",
    });
    return;
  }
  try {
    console.log(req.body)
    const houseCall = await HouseCall.destroy({where: {id: req.body.id}})
    res.sendStatus(200);
  } catch(err) {
    console.log(err);
  }
}

exports.getHouseCalls = async function(req, res) {
  if(!req.body) {
    res.status(400).send({
      message: "Contetn can not be empty!",
    });
    return;
  }
  try {
    const houseCalls = await HouseCall.findAll({where: {doctorId: req.body.doctorId}});
    res.send(houseCalls);
  } catch(err) {
    console.log(err);
  }
}