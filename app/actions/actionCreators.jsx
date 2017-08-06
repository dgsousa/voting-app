
export const vote = (id, option) => (dispatch, getState, socket) => {
	const {polls, user} = getState();
	if((polls[id]["voted"][user] && !(user == null)) || !option) {
		return;
	}
	socket.emit("vote", { id, option });
	

}

export const addPoll = (topic, optionsArray, creator) => (dispatch, getState, socket) => {
	if(checkForPoll(getState(), topic) || !topic || !optionsArray.length) return;
	const options = transformOptions(optionsArray);
	socket.emit("addPoll", { topic, options, creator})
}


export const deletePoll = (id) => (dispatch, getState, socket) => {
	const confirmation = confirm("Are you sure you want to delete this poll?");
	if(confirmation) socket.emit("deletePoll", id);
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

