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

db.Appointment = require("./appointment.model")(db.sequelize, DataTypes);
db.Appointment = require("./card.model")(db.sequelize, DataTypes);
db.Appointment = require("./doctor.model")(db.sequelize, DataTypes);
db.Appointment = require("./patient.model")(db.sequelize, DataTypes);

module.exports = db;