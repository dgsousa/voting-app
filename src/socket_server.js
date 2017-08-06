const socketIO = require("socket.io");


const vote = (database, data) => {
	const {id, option} = data;
	database.ref("polls/" + id).transaction(state => ({
		...state,
		["voted"]: {...state["voted"], [user]: true},
		["options"]: {
			...state.options,
			[option]: (state.options[option] + 1) || 1
		}
	}));
}

const addPoll = (database, data) => {
	const {topic, options, creator} = data;
	database.ref("polls/").push({
		topic,
		creator,
		voted: {},
		options
	});
}

const deletePoll = (database, data) => {
	const {id} = data;
	database.ref("polls/" + id + "/").remove();
}



const socketServer = (server, database) => {
	const io = socketIO.listen(server);

	io.on("connection" socket => {
		socket.on("vote", data => vote(database, data));
		socket.on("addPoll", data => addPoll(database, data));
		socket.on("deletePoll", data => deletePoll(database, data));
	})
}


module.exports = socketServer;



