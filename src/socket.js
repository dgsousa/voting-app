const socketIO = require("socket.io");
const sharedSession = require("express-socket.io-session");


const socketServer = (server, session, config) => {
	const io = socketIO.listen(server);
	io.use(session);

	io.on("connection", socket => {
		const user = "test";
		socket.emit("data", {config, user})
		socket.on("login", user => {
			console.log(user);
			socket.handshake.session.user = user;
			socket.handshake.session.save();
		})
		socket.on("logout", user => {
			if(socket.handshake.session.user) {
				delete socket.handshake.session.user;
				socket.handshake.session.save();
			}
		})
	})
}



module.exports = socketServer;