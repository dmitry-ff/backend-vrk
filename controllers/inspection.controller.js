const {Inspection, Referral, Doctor, Patient} = require("../models");

exports.addInspection = function(req, res) {
  if(!req.body) {
    res.status(400).send({
      message: "Contetn can not be empty!",
    });
    return;
  }
  
Inspection.create((req.body))
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    res.status(500).send({
      message: err.message || "Some error occured while create the Inspection"
    })
  })
}

exports.getInspections = async function(req, res) {
  try {
    const rows = await Inspection.findAll({
      attributes: ["date", "id", "status"],
      include: [
        {
          model: Referral,
          attributes: {
            include: ["date", "diagnoz_code"]
          },
          include: [
            {
              model: Doctor,
              attributes: ["name", "surname", "middlename", "speciality",]
            },
            {
              model: Patient,
              attributes: ["name", "surname", "middlename"]
            }
          ],
        },
        {
          model: Doctor,
          attributes: ["name", "surname", "middlename", "speciality",]
        },
    ]});
    res.send(rows);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occured while create the Inspection"
    })
  }
}

exports.getInspectionById = async function(req, res) {
  try {
    const rows = await Inspection.findByPk(req.params.id,{
      include: [
        {
          model: Referral,
          attributes: {
            include: ["date", "diagnoz_code"]
          },
          include: [
            {
              model: Doctor,
              // attributes: ["name", "surname", "middlename", "speciality"]
              attributes: {
                exclude: ["createdAt", "updatedAt", "password", "login"]
              }
            },
            {
              model: Patient,
              attributes: ["name", "surname", "middlename"]
            }
          ],
        },
        {
          model: Doctor,
          attributes: ["name", "surname", "middlename", "speciality",]
        },
    ]});
    res.send(rows);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occured while create the Inspection"
    })
  }
}