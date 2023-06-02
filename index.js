require('dotenv').config();
const express = require("express");
const process = require("process");
const cors = require("cors");
const sequelize  = require("./db");
const modles = require("./models");
const doctorRouter = require("./routes/doctor.router");
const cardRouter = require("./routes/card.router");
const inspectionRouter = require("./routes/inspection.router");
const appointmentRouter = require("./routes/appointment.router");
const patientRouter = require("./routes/patient.router");
const referralRouter = require("./routes/referral.router");
const houseCallRouter = require("./routes/houseCalls.router");
const errorHandler = require("./middleware/ErrorHandlingMiddleware");

const PORT = process.env.PORT || 8081;

const corsOptions = {
  origin: `http://localhost:3000`
}

const app = express();
app.use(cors(corsOptions));
app.set("vies engine", "hbs");
app.use(express.json()) //парсит запросы с заголовком content-type - application/json
app.use(express.urlencoded({extended: false})); //парсит запросы с загловком content-type - application/x-www/form-urlencoded

app.use("/doctors", doctorRouter);
app.use("/cards", cardRouter);
app.use("/inspection", inspectionRouter);
app.use("/appointments", appointmentRouter);
app.use("/patient", patientRouter);
app.use("/referrals", referralRouter);
app.use("/houseCalls", houseCallRouter)

app.use(errorHandler);
app.use((req, res, next) => {
  res.status(404).send("Not Found234234234");
})

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({force: false});
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  } catch(err) {
    console.log("Failed to sync vkrdb: " + err.message);
  }
}


process.on("SIGINT", async () => {
  console.log("Приложение завершило работу!");
  process.exit();
})

start();