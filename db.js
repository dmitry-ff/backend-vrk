const {Sequelize} = require("sequelize");

module.exports = new Sequelize(
  process.env.DB,
  process.env.DB_USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    pool: {
      max: process.env.MAX,
      min: process.env.MIN,
      acquire: process.env.ACQUIRE,
      idle: process.env.IDLE,
    }
  }
)
