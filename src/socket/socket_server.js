"use strict";

const socketIO = require("socket.io");
const {addedPollsDatabaseListener, deletePollDatabaseListener, voteDatabaseListener} = require("../listeners/database_listeners");
const {voteActionListener, addPollActionListener, deletePollActionListener} = require("../listeners/action_listeners");
const config = require("../database/client_key");


const socketServer = (server, session, database) => {
	const io = socketIO.listen(server);

	io.on("connection", socket => {
		socket.emit("config", config);
		addedPollsDatabaseListener(io, database);
		deletePollDatabaseListener(io, database);
		voteDatabaseListener(io, database);
		socket.on("vote", voteActionListener(database));
		socket.on("addPoll", addPollActionListener(database));
		socket.on("deletePoll", deletePollActionListener(database));
	})

	return io;
}


module.exports = socketServer;



