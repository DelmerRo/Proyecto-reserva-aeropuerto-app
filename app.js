require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnect = require('./config/mongo');
const app = express();

const Aeropuerto = require("./Aeropuerto");

const aeropuerto = new Aeropuerto({
    name: "Aeropuerto"
});


app.use(cors())
app.use(express.json()) // prepara para que pueda recibir JSON

const port = process.env.PORT || 3000

app.use((req, res, next) => {
    res.locals.aeropuerto = aeropuerto;
    next();
});

//localhost/api/________
app.use("/api", require("./routes"))

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})
dbConnect()