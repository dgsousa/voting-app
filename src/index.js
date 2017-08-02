const express = require("express");
const app = express();
const path = require("path");
const server = require("http").Server(app);

const config = require("./config");
const socketServer = require("./socket");

const port = process.env.PORT || 3000;
const index = path.join(__dirname + "/templates/index.html");



app.use("/static", express.static("public"));

app.use("/", (req, res) => {
		res.sendFile(index);
	})

app.listen(port);


server.listen(8080);

socketServer(server, config);





