const socketIO = require("socket.io");


const socketServer = (server, data) => {
	const io = socketIO(server);

	io.on("connection", socket => {
		socket.emit("data", data)
	})
}



module.exports = socketServer;