const express = require("express");
const process = require("process");
const cors = require("cors");
const db  = require("./models");

const PORT = process.env.PORT || 8081;

const corsOptions = {
  origin: `http://localhost:${PORT}`
}

const app = express();
app.use(cors(corsOptions));
app.set("vies engine", "hbs");
app.use(express.json()) //парсит запросы с заголовком content-type - application/json
app.use(express.urlencoded({extended: false})); //парсит запросы с загловком content-type - application/x-www/form-urlencoded

app.use((req, res, next) => {
  res.status(404).send("Not Found");
})
db.sequelize.sync({ force: true })
  .then(() => {
    console.log("Synced vkrdb");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  })
  .catch((err) => {
    console.log("Failed to sync vkrdb: " + err.message);
  })


process.on("SIGINT", async () => {
  console.log("Приложение завершило работу!");
  process.exit();
})
