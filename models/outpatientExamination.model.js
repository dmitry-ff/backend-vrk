module.exports = (sequelize, DataTypes) => {
  const OutpatientExamination = sequelize.define("outpatient examination", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    lpu: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    department: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    complaints: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    anamnesis: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    objectively: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    spec_status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    treatment_plan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    survey_plan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    recomendations: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return OutpatientExamination;
}