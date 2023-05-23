module.exports = (sequelize, DataTypes) => {
  const DispensaryRegistration = sequelize.define("dispensary registration", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    area: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    connection_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },

  });

  return DispensaryRegistration;
}