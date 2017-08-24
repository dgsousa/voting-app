const socketIO = require("socket.io");
const sharedSession = require("express-socket.io-session");


const login = socket => user => {
	socket.handshake.sessoin.user = user;
	socket.handshake.session.save();
	socket.emit("data", {type: "SIGN_IN", user});
}

const logout = socket => user => {
	if(socket.handshake.session.user) {
		delete socket.handshake.session.user;
		socket.handshake.session.save();
	}
	socket.emit("data", {type: "SIGN_OUT"});
}




const socketServer = (server, session, config) => {
	const io = socketIO.listen(server);
	io.use(session);

	io.on("connection", socket => {
		const user = socket.handshake.session.user || null;
		socket.emit("data", {config, user});
		socket.on("login", login(socket));
		socket.on("logout", logout(socket));
	})
}



module.exports = socketServer;