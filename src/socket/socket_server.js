const socketIO = require("socket.io");
const database_listeners = require("../listeners/database_listeners");
const action_listeners = require("../listeners/action_listeners");
const config = require("../database/client_key");


const socketServer = (server, database) => {
	const {addedPollsDatabaseListener, deletePollDatabaseListener, voteDatabaseListener} = database_listeners;
	const {voteActionListener, addPollActionListener, deletePollActionListener} = action_listeners;
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



