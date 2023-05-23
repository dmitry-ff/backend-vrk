module.exports = (sequelize, DataTypes) => {
  const Contacts = sequelize.define("contacts", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    contacts_phone_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    contacts_comments: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    contacts_area_category: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    contacts_social_category: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    contacts_social_status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return Contacts;
}