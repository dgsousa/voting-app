const Server = require("socket.io");


const socketServer = data => {
	const io = new Server().attach(8090);

	io.on("connection", socket => {
		socket.emit("data", data)
	})
}



module.exports = socketServer;