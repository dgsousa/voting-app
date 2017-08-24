"use strict";

//Packages
const express = require("express");
const app = express();
const path = require("path");
const server = require("http").createServer(app);
const favicon = require("serve-favicon");
const firebase = require("firebase");


//Files
const socketServer = require("./socket/socket_server.js");
const database = require("./database");
const index = path.join(__dirname + "/views/index.ejs");

//Set up the session
const session = require("express-session")({
    secret: "firebase",
    resave: true,
    saveUninitialized: true
})
const sharedSession = require("express-socket.io-session")(session);
app.use(session);


//Send Static Files
app.use("/static", express.static("public"));
app.use(favicon('./public/images/vote.png'));

app.set("view engine", "ejs");

app.use("/", (req, res) => {
	res.render(index, {});
});

//Set up the server
server.listen(process.env.PORT || 3000);

const socket = socketServer(server, sharedSession, database);




