import database from "../database";


export const vote = (topic, option, user) => (dispatch, getState) => {
	if(getState()["polls"][topic]["voted"][user]) return;
	return dispatch({
		type: "VOTE",
		topic,
		option,
		user
	})
}


// export const pollAdded = (dispatch) => 
// 	database.ref("/polls/").on("child_added", snap => {
// 		return dispatch({
// 			type: "ADD_POLL",
// 			poll: snap.val()
// 		})
// 	})
	

export const addPoll = (topic, optionsArray, creator) => (dispatch, getState) => {
	if(getState()["polls"][topic] || !topic || !optionsArray.length) return;
	let options = transformOptions(optionsArray);
	// database.ref("polls/").push({
	// 	[poll]: {
	// 		["creator"]: user,
	// 		["voted"]: {},
	// 		["options"]: options
	// 	}
	// });
	return dispatch({
		type: "ADD_POLL",
		topic,
		options,
		creator
	})
}


export const deletePoll = (topic, user) => (dispatch, getState) => {
	if(getState()["polls"][topic].creator !== user) return;
	return dispatch({
		type: "DELETE_POLL",
		topic
	})
}

const transformOptions = (optionsArray) => {
	const options = {};
	optionsArray.forEach(option => {
		options[option] = 0;
	})
	return options;
}

