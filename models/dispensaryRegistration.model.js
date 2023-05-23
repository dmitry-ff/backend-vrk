module.exports = (sequelize, DataTypes) => {
  const DispensaryRegistration = sequelize.define("dispensary registration", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    dispensary_registration_area: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dispensary_registration_connection_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },

  });

  return DispensaryRegistration;
}