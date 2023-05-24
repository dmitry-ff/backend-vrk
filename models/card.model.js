module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define("card", {
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
    dispensary_registration_area: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dispensary_registration_connection_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    insurer_area: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    insurer_policy_series: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    insurer_policy_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    patientDocuments_snils: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    patientDocuments_document_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    patientDocuments_ovd: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    patientDocuments_pass_series: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    patientDocuments_pass_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    patientDocuments_pass_date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    privilege_type_of_benefit: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    privilege_disability: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    privilege_disability_group: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    registration_area: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    registration_district: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    registration_town: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    registration_street: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    registration_home_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    registration_building: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    registration_flat_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    registration_room: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    workPlace_work_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    workPlace_work_place: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    workPlace_subdivision: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    workPlace_job_title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    workPlace_profession: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return Card;
}