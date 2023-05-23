module.exports = (sequelize, DataTypes) => {
  const Insurer = sequelize.define("insurer", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    area: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    policy_series: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    policy_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Insurer;
}