const express = require("express");
const path = require("path");
console.log("test");

const app = express();
const port = process.env.PORT || 3000;
const index = path.join(__dirname + "/templates/index.html");



app.use("/static", express.static("public"));



app.use("/", (req, res) => {
	res.sendFile(index);
})



app.listen(port);






