const express = require("express");
const path = require("path");
const parser = require("body-parser");

const config = require("./config");
const socketServer = require("./socket");


const app = express();
const port = process.env.PORT || 3000;
const index = path.join(__dirname + "/templates/index.html");


socketServer(config);

app.use(parser.json());

app.use("/static", express.static("public"));

app.use("/", (req, res) => {
	res.sendFile(index);
})

app.listen(port);






