module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define("patients", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    
  });

  return Card;
}