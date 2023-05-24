const {Doctor} = require("../models");
const bcrypt = require("bcrypt");

exports.addDoctor = function(req, res) {
  if(!req.body) {
    res.status(400).send({
      message: "Contetn can not be empty!",
    });
    return;
  }
  Doctor.create(req.body)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while create the Doctor"
      })
    })
}

exports.registration = async function(req, res, next) {
  const {login, password} = req.body;
  if(!login || !password) {
    return;
  }
  const candidate = await Doctor.findOne({where: {login}});
  if(candidate) {
    return;
  }
  const hashPassword = await bcrypt(password, 5)
  const user = await Doctor.create({})
}

exports.updateDoctor = function(req, res) {
  if(!req.body) {
    res.status(400).send({
      message: "Contetn can not be empty!",
    });
    return;
  }
  Doctor.update(req.body, {where: {id: req.params.id}})
}