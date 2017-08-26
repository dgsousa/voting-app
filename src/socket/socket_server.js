"use strict";

const socketIO = require("socket.io");
const {addedPollsDatabaseListener, deletePollDatabaseListener, voteDatabaseListener} = require("../listeners/database_listeners");
const {voteActionListener, addPollActionListener, deletePollActionListener, loginEventListener, logoutEventListener} = require("../listeners/action_listeners");
const config = require("../database/client_key");


const socketServer = (server, session, database) => {
	const io = socketIO.listen(server);
	io.use(session);
	io.on("connection", socket => {
		const user = socket.handshake.session.user || null;
		socket.emit("init", {config, user});
		addedPollsDatabaseListener(io, database);
		deletePollDatabaseListener(io, database);
		voteDatabaseListener(io, database);
		socket.on("vote", voteActionListener(database));
		socket.on("addPoll", addPollActionListener(database));
		socket.on("deletePoll", deletePollActionListener(database));
		socket.on("login", loginEventListener(socket));
		socket.on("logout", logoutEventListener(socket));
	})

	return io;
}


module.exports = socketServer;



