const sequelize = require("../db");
const {DataTypes} = require("sequelize");

const Appointment = sequelize.define("appointments", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  appointmentDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  appointmentTime: {
    type: DataTypes.TIME,
    allowNull: false
  },
  status: {
    type: DataTypes.CHAR,
    allowNull: false,
  }
});

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
    type: DataTypes.STRING,
    allowNull: true,
  },
  contacts_area_category: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  contacts_social_category: {
    type: DataTypes.STRING,
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
    allowNull: true,
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

const Doctor = sequelize.define("doctors", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  surname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  middlename: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lpu: {
    type: DataTypes.STRING,
    allowNull: false
  },
  speciality: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  department: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  login: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

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

const Patient = sequelize.define("patients", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  surname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  middlename: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  sex: {
    type: DataTypes.CHAR,
    allowNull: false,
  }
}, {});

const Referral = sequelize.define("referral", {
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  reason: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  date: {
    allowNull: false,
    type: DataTypes.DATE,
  }
})

//TODO: add relations, complete model
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

const Coupon = sequelize.define("coupon", {
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
})

const HouseCall = sequelize.define("house calls", {
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  adress: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  reason: {
    allowNull: false,
    type: DataTypes.STRING,
  }
})

// TODO: fix relations if it has intermediate table
Patient.hasMany(HouseCall);
HouseCall.belongsTo(Patient);

Doctor.hasMany(HouseCall);
HouseCall.belongsTo(Doctor);

Patient.hasMany(Coupon);
Coupon.belongsTo(Patient);

Doctor.hasMany(Coupon);
Coupon.belongsTo(Doctor);

Patient.hasMany(Appointment, {foreignKey: {allowNull: false}});
Appointment.belongsTo(Patient, {foreignKey: {allowNull: false}});

Doctor.hasMany(Appointment, {foreignKey: {allowNull: false}});
Appointment.belongsTo(Doctor, {foreignKey: {allowNull: false}});

Patient.hasMany(Card);
Card.belongsTo(Patient);

Doctor.hasMany(OutpatientExamination);
OutpatientExamination.belongsTo(Doctor);

Patient.hasMany(Referral, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
Referral.belongsTo(Patient, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });

Referral.hasOne(OutpatientExamination);
OutpatientExamination.belongsTo(Referral);

Doctor.hasMany(Referral);
Referral.belongsTo(Doctor);

module.exports = {
  Appointment,
  Card,
  Doctor,
  OutpatientExamination,
  Patient,
  Referral,
  HouseCall,
  Coupon
}