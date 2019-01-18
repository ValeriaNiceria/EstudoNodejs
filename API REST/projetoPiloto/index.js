const express = require("express");
const PORT = 3000;

const app = express();
app.get("/", (req, res) => res.json({status: "Projeto Piloto API"}));
app.listen(PORT, () => console.log(`Projeto Piloto API = porta ${PORT}`));