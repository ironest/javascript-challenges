const express = require("express");
const bodyParser = require("body-parser");

const routes = require("./routes");

const port = 3000;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(routes);

app.listen(port, ()=>console.log(`Express listening on port: ${port}`));