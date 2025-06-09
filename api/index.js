const express = require("express");
const { rotapadrao } = require("./controler");
const app = express();

app.get("/vacel", rotapadrao);

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;