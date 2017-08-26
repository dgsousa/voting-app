"use strict";

const voteActionListener = database => data => {
	const {id, option, user} = data;
	database.ref("polls/" + id).transaction(state => ({
		...state,
		voted: {...state.voted, [user]: true},
		options: {...state.options, [option]: (state.options[option] + 1) || 1}
	}))
}

const addPollActionListener = database => data => {
	const {topic, options, creator} = data;
	database.ref("polls/").push({
		topic,
		creator,
		voted: {},
		options
	});
}

const deletePollActionListener = database => data => {
	const {id} = data;
	database.ref("polls/" + id + "/").remove();
}

const loginEventListener = socket => user => {
	socket.handshake.session.user = user;
    socket.handshake.session.save();
    socket.emit("data", {type: "SET_USER", user});
}

const logoutEventListener = socket => user => {
	if (socket.handshake.session.user) {
        delete socket.handshake.session.user;
        socket.handshake.session.save();
    }
    socket.emit("data", {type: "SIGN_OUT"});
}


module.exports = {
	voteActionListener,
	addPollActionListener,
	deletePollActionListener,
	loginEventListener,
	logoutEventListener
}