
//Packages
const express = require("express");
const app = express();
const path = require("path");
const server = require("http").createServer(app);
const favicon = require("serve-favicon");


//Files
const config = require("./config");
const socketServer = require("./socket");
const index = path.join(__dirname + "/templates/index.html");


//Set up the session
const session = require("express-session")({
	secret: 'voting-app',
  	resave: false,
  	saveUninitialized: true
});
const sharedSession = require("express-socket.io-session")(session);

app.use(session);



//Retrieve static files
app.use("/static", express.static("public"));
app.use(favicon('./public/images/vote.png'));

app.use("/", (req, res) => res.sendFile(index));




server.listen(process.env.PORT || 3000);

socketServer(server, sharedSession, config);





