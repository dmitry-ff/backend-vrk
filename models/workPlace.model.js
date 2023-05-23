module.exports = (sequelize, DataTypes) => {
  const WorkPlace = sequelize.define("work place", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    work_place: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    subdivision: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    job_title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    profession: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return WorkPlace;
}