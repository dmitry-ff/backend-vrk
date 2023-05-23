module.exports = (sequelize, DataTypes) => {
  const Contacts = sequelize.define("contacts", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    comments: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    area_category: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    social_category: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    social_status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return Contacts;
}