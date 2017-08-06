

const addedPollsDatabaseListener = (socket, database) => 
	database.ref("/polls/").on("child_added", snap => {
		const val = snap.val();
		const key = snap.key;
		socket.emit("data", {
			type: "ADD_POLL",
			id: snap.key,
			topic: val.topic,
			creator: val.creator,
			options: val.options,
			voted: val.voted
		});
	})


const deletePollDatabaseListener = (socket, database) =>
	database.ref("/polls/").on("child_removed", snap => {
		const id = snap.key;
		socket.emit("data", {
			type: "DELETE_POLL",
			id
		});
	})


const voteDatabaseListener = (socket, database) =>
	database.ref("/polls/").on("child_changed", snap => {
		const id = snap.key;
		const {options, voted} = snap.val();
		socket.emit("data", {
			type: "VOTE",
			id,
			options,
			voted
		});
	})



module.exports = {
	addedPollsDatabaseListener,
	deletePollDatabaseListener,
	voteDatabaseListener
};
