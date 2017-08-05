

const addedPollsEventListener = (socket, database) => 
	database.ref("/polls/").on("child_added", snap => {
		const val = snap.val();
		const key = snap.key;

		// store.dispatch({
		// 	type: "ADD_POLL",
		// 	id: snap.key,
		// 	topic: val.topic,
		// 	creator: val.creator,
		// 	options: val.options,
		// 	voted: val.voted
		// })
	})


const deletePollEventListener = (socket, database) =>
	database.ref("/polls/").on("child_removed", snap => {
		const id = snap.key;
		// store.dispatch({
		// 	type: "DELETE_POLL",
		// 	id
		// })
	})


const voteEventListener = (socket, database) =>
	database.ref("/polls/").on("child_changed", snap => {
		const id = snap.key;
		const {options, voted} = snap.val();
		// store.dispatch({
		// 	type: "VOTE",
		// 	id,
		// 	options,
		// 	voted
		// })
	})



const addEventListeners = (socket, database) => {
	addedPollsEventListener(socket, database);
	deletePollEventListener(socket, database);
	voteEventListener(socket, database);
}

module.exports = addEventListeners;
