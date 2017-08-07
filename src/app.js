"use strict";

require("babel-core/register")({
	"presets": ["es2015", "stage-0"]
})
const express = require("express");
const app = express();
const path = require("path");
const server = require("http").createServer(app);
const favicon = require("serve-favicon");
const firebase = require("firebase");

const socketServer = require("./socket/socket_server.js");
const database = require("./database");
const port = process.env.PORT || 3000;
const index = path.join(__dirname + "/views/index.ejs");



app.use("/static", express.static("public"));
app.use(favicon('./public/images/vote.png'));

app.set("view engine", "ejs");

app.use("/", (req, res) => {
	res.render(index, {});
})

server.listen(port);

const socket = socketServer(server, database);




