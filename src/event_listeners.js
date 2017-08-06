

const addedPollsEventListener = (socket, database) => 
	database.ref("/polls/").on("child_added", snap => {
		socket.emit("ADD_POLL", snap);
	})


const deletePollEventListener = (socket, database) =>
	database.ref("/polls/").on("child_removed", snap => {
		socket.emit("DELETE_POLL", snap);
	})


const voteEventListener = (socket, database) =>
	database.ref("/polls/").on("child_changed", snap => {
		socket.emit("VOTE", snap);
	})


const addEventListeners = (socket, database) => {
	addedPollsEventListener(socket, database);
	deletePollEventListener(socket, database);
	voteEventListener(socket, database);
}

module.exports = addEventListeners;
