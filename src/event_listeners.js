

const addedPollsEventListener = (socket) => 
	database.ref("/polls/").on("child_added", snap => {
		socket.emit("ADD_POLL", snap);
	})


const deletePollEventListener = (socket) =>
	database.ref("/polls/").on("child_removed", snap => {
		socket.emit("DELETE_POLL", snap);
	})


const voteEventListener = (socket) =>
	database.ref("/polls/").on("child_changed", snap => {
		socket.emit("VOTE", snap);
	})


const addEventListeners = (socket) => {
	addedPollsEventListener(socket);
	deletePollEventListener(socket);
	voteEventListener(socket);
}

module.exports = addEventListeners;
