

const voteActionListener = (database, data) => {
	const {id, option, user} = data;
	database.ref("polls/" + id).transaction(state => {
		const voted = Object.assign(state.voted || {}, {[user]: true})
		const options = Object.assign(state.options, {[option]: (state.options[option] + 1) || 1})
		return Object.assign(state, {voted}, {options});
	})
}

const addPollActionListener = (database, data) => {
	const {topic, options, creator} = data;
	database.ref("polls/").push({
		topic,
		creator,
		voted: {},
		options
	});
}

const deletePollActionListener = (database, data) => {
	const {id} = data;
	database.ref("polls/" + id + "/").remove();
}


module.exports = {
	voteActionListener,
	addPollActionListener,
	deletePollActionListener
}