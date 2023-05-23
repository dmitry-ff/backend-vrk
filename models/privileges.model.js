module.exports = (sequelize, DataTypes) => {
  const Privilege = sequelize.define("privileges", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    type_of_benefit: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    disability: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    disability_group: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return Privilege;
}