"use strict";

const socketIO = require("socket.io");
const { addedPollsDatabaseListener, deletePollDatabaseListener, voteDatabaseListener } = require("../listeners/database_listeners");
const { voteActionListener, addPollActionListener, deletePollActionListener, loginActionListener, logoutActionListener } = require("../listeners/action_listeners");
const config = require("../database/client_key");


const socketServer = (server, session, database) => {
	const io = socketIO.listen(server);
	io.use(session);
	io.on("connection", socket => {
		console.log("socket is now listening");
		const user = socket.handshake.session.user || null;
		socket.emit("init", {config, user});
		addedPollsDatabaseListener(socket, database);
		deletePollDatabaseListener(socket, database);
		voteDatabaseListener(socket, database);
		socket.on("vote", voteActionListener(database));
		socket.on("addPoll", addPollActionListener(database));
		socket.on("deletePoll", deletePollActionListener(database));
		socket.on("login", loginActionListener(socket));
		socket.on("logout", logoutActionListener(socket));
	})

	return io;
}


module.exports = socketServer;



