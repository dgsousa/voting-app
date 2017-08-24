"use strict";

const socketIO = require("socket.io");
const {addedPollsDatabaseListener, deletePollDatabaseListener, voteDatabaseListener} = require("../listeners/database_listeners");
const {voteActionListener, addPollActionListener, deletePollActionListener} = require("../listeners/action_listeners");
const config = require("../database/client_key");


const login = socket => user => {
	socket.handshake.session.user = user;
    socket.handshake.session.save();
    socket.emit("data", {type: "SET_USER", user});
}

const logout = socket => user => {
	if (socket.handshake.session.user) {
        delete socket.handshake.session.user;
        socket.handshake.session.save();
    }
    socket.emit("data", {type: "SIGN_OUT"});
}

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
		socket.on("login", login(socket));
		socket.on("logout", logout(socket));
	})

	return io;
}


module.exports = socketServer;



