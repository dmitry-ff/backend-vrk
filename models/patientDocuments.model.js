module.exports = (sequelize, DataTypes) => {
  const PatientDocuments = sequelize.define("patient documents", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    snils: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    document_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ovd: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pass_series: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pass_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pass_date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return PatientDocuments;
}