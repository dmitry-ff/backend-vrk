module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define("card", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
  });

  return Card;
}