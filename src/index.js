const express = require("express");
const app = express();
const path = require("path");
const server = require("http").createServer(app);
const favicon = require("serve-favicon");

const config = require("./config");
const socketServer = require("./socket");

const port = process.env.PORT || 3000;
const index = path.join(__dirname + "/templates/index.html");



app.use("/static", express.static("public"));
app.use(favicon('./public/images/vote.png'));

app.use("/", (req, res) => {
	res.sendFile(index);
})

server.listen(port);



socketServer(server, config);





