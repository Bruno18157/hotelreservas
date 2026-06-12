require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const quartosRoutes = require("./src/routes/quartos.route");
const reservasRoutes = require("./src/routes/reservas.route");

app.use("/quartos", quartosRoutes);
app.use("/reservas", reservasRoutes);

const porta = process.env.PORT || 3000;

app.listen(porta, () => {
    console.log(`Servidor online na porta ${porta}`);
});