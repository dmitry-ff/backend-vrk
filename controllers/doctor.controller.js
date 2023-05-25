const {Doctor} = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const ApiError = require("../error/ApiError");

// exports.addDoctor = function(req, res) {
//   if(!req.body) {
//     res.status(400).send({
//       message: "Contetn can not be empty!",
//     });
//     return;
//   }
//   Doctor.create(req.body)
//     .then((data) => {
//       res.send(data)
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: err.message || "Some error occured while create the Doctor"
//       })
//     })
// }

const generateJwt = (id, login) => {
  return jwt.sign(
    {id, login}, 
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
  const jwtToken = generateJwt(doctor.id, login);
  return res.json(jwtToken)
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
  const token = generateJwt(doctor.id, doctor.login);
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
  const token = generateJwt(req.doctor.id, req.doctor.login);
  res.json({token})
}