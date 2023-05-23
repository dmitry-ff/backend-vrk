module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define("appointments", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    patientName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    patientBirthDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    appointmentDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    appointmentTime: {
      type: DataTypes.TIME,
      allowNull: false
    }
  });

  return Appointment;
}