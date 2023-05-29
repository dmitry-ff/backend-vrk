const {Doctor} = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const ApiError = require("../error/ApiError");

const generateJwt = (id, login, lpu, name, surname, middlename, speciality, department) => {
  return jwt.sign(
    {id, login, lpu, name, surname, middlename, speciality, department}, 
    process.env.SECRET_KEY,
    {expiresIn: "24h"}
    )
}

exports.addDoctor = async function(req, res, next) {
  const {login, password, ...rest} = req.body;
  if(!login || !password) {
    return next(ApiError.internal("Данный login уже существует"));
  }
  const candidate = await Doctor.findOne({where: {login}});
  if(candidate) {
    console.log("asdfasdf")
    return next(ApiError.internal("Данный login уже существует"));

  }
  const hashPassword = await bcrypt.hash(password, 5)
  const doctor = await Doctor.create({password: hashPassword, login, ...rest})
  const token = generateJwt(doctor.id, doctor.login, doctor.lpu, doctor.name, doctor.surname, doctor.middlename, doctor.speciality, doctor.department);
  console.log(token);
  return res.json(token)
}

exports.login = async function(req, res, next) {
  const {login, password} = req.body;
  const doctor = await Doctor.findOne({where: {login}});
  if(!doctor) {
    return next(ApiError.internal("Пользователь не найден"))
  }
  let comparePassword = bcrypt.compareSync(password, doctor.password)
  if(!comparePassword) {
    return next(ApiError.internal("Указан неверный пароль"));
  }
  const token = generateJwt(doctor.id, doctor.login, doctor.lpu, doctor.name, doctor.surname, doctor.middlename, doctor.speciality, doctor.department);
  return res.json(token);
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

exports.check = async function(req, res) {
  const token = generateJwt(req.doctor.id, req.doctor.login, req.doctor.lpu, 
    req.doctor.name, req.doctor.surname, req.doctor.middlename, req.doctor.speciality, req.doctor.department);
  res.json({token})
}