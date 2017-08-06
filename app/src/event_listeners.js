
const addedPollsEventListener = (store, socket) => 
	socket.on("ADD_POLL", snap => {
		const val = snap.val();
		const key = snap.key;
		store.dispatch({
			type: "ADD_POLL",
			id: snap.key,
			topic: val.topic,
			creator: val.creator,
			options: val.options,
			voted: val.voted
		})
	})


const deletePollEventListener = (store, socket) =>
	socket.on("DELETE_POLL", snap => {
		const id = snap.key;
		store.dispatch({
			type: "DELETE_POLL",
			id
		})
	})


const voteEventListener = (store, socket) =>
	socket.on("VOTE", snap => {
		const id = snap.key;
		const {options, voted} = snap.val();
		store.dispatch({
			type: "VOTE",
			id,
			options,
			voted
		})
	})



const addEventListeners = (store, socket) => {
	addedPollsEventListener(store, socket);
	deletePollEventListener(store, socket);
	voteEventListener(store, socket);
}

export default addEventListeners;
