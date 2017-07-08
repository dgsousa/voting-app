import database from "../database";
import v4 from "uuid/v4";


export const vote = (poll, option, user) => (dispatch, getState) => {
	if(getState()["polls"][poll]["voted"][user]) return;
	return dispatch({
		type: "VOTE",
		poll,
		option,
		user
	})
}

	

export const addPoll = (poll, optionsArray, creator) => (dispatch, getState) => {
	if(getState()["polls"][poll] || !poll || !optionsArray.length) return;
	const options = transformOptions(optionsArray);
	const key = database.ref("polls/").push({
		[poll]: {
			id: v4(),
			creator: creator,
			voted: {},
			options: options
		}
	}).key;

	console.log(database.ref("polls/").child(poll));
}


export const deletePoll = (poll) =>  (dispatch) => {
	database.ref("polls/" + poll).push("hello");

	// return dispatch({
	// 	type: "DELETE_POLL",
	// 	poll
	// })
}

//helper functions

const transformOptions = (optionsArray) => {
	const options = {};
	optionsArray.forEach(option => {
		options[option] = 0;
	})
	return options;
}

