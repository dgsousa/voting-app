
export const vote = (id, option) => (dispatch, getState, database) => {
	const {polls, user} = getState();
	if((polls[id]["voted"][user] && !(user == null)) || !option) {
		return;
	}
	database.ref("polls/" + id).transaction(state => ({
		...state,
		["voted"]: {...state["voted"], [user]: true},
		["options"]: {
			...state.options,
			[option]: (state.options[option] + 1) || 1
		}
	}));

}

export const addPoll = (topic, optionsArray, creator) => (dispatch, getState, database) => {
	if(checkForPoll(getState(), topic) || !topic || !optionsArray.length) return;
	const options = transformOptions(optionsArray);
	database.ref("polls/").push({
		topic,
		creator,
		voted: {},
		options
	});
}


export const deletePoll = (id) => (dispatch, getState, database) => {
	const confirmation = confirm("Are you sure you want to delete this poll?");
	if(confirmation) database.ref("polls/" + id + "/").remove();
}


//helper functions
const checkForPoll = (state, topic) => 
	Object.keys(state.polls).some(id => {
		return state.polls[id] && state.polls[id].topic === topic;
	})


const transformOptions = (optionsArray) => {
	const options = {};
	optionsArray.forEach(option => {
		options[option] = 0;
	})
	return options;
}

