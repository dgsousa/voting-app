const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3000;
const index = path.join(__dirname + "/templates/index.html");




// mongoose.connect("mongodb://localhost:27017/tests", (err) => {
// 	if(err) console.log("There was an error connecting to the database");
// 	console.log("Connected to the database at port 27017");
// })

// const db = mongoose.connection;




app.use("/static", express.static("public"));



app.use("/", (req, res) => {
	res.sendFile(index);
})



app.listen(port);






