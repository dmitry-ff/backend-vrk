const dbConfig = require("../db.config");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  // operatorsAliases: false, //deprecated

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};
db.DataTypes = DataTypes;
db.sequelize = sequelize;
//TODO: переписать на авторестрацию сущностей при добавлении новых
db.Appointment = require("./appointment.model")(db.sequelize, DataTypes);
db.Card = require("./card.model")(db.sequelize, DataTypes);
db.Doctor = require("./doctor.model")(db.sequelize, DataTypes);
db.Patient = require("./patient.model")(db.sequelize, DataTypes);
db.Contacts = require("./contacts.model")(db.sequelize, DataTypes);
db.DispensaryRegistration = require("./dispensaryRegistration.model")(db.sequelize, DataTypes);
db.Insurer = require("./insurer.model")(db.sequelize, DataTypes);
db.PatientDocuments = require("./patientDocuments.model")(db.sequelize, DataTypes);
db.Privileges = require("./privileges.model")(db.sequelize, DataTypes);
db.Registration = require("./registration.model")(db.sequelize, DataTypes);
db.WorkPlace = require("./workPlace.model")(db.sequelize, DataTypes);
db.OutpatientExamination = require("./outpatientExamination.model")(db.sequelize, DataTypes)


module.exports = db;