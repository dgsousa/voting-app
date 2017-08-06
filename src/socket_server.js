const socketIO = require("socket.io");
const event_listeners = require("./event_listeners");

const vote = (database, data) => {
	const {id, option} = data;
	database.ref("polls/" + id).transaction(state => {
		console.log("state", state);
		Object.assign(
			state,
			{voted: Object.assign(state.voted, {[user]: true})},
			{options: Object.assign(state.options, {[option]: (state.options[option] + 1) || 1})}
		)
	})
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
	const {addedPollsEventListener, deletePollEventListener, voteEventListener} = event_listeners;
	const io = socketIO.listen(server);

	io.on("connection", socket => {
		addedPollsEventListener(io, database);
		deletePollEventListener(io, database);
		voteEventListener(io, database);
		socket.on("vote", data => {
			vote(database, data)
		});
		socket.on("addPoll", data => addPoll(database, data));
		socket.on("deletePoll", data => deletePoll(database, data));
	})

	return io;
}


module.exports = socketServer;



