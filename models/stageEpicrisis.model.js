module.exports = (sequelize, DataTypes) => {
  const StageEpicrisis = sequelize.define("stage epicrisis", {
    id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    work_conditions: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  })
  
  return StageEpicrisis;
}