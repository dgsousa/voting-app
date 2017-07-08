
import database from "./database";


export const addedPollsEventListener = (store) => 
	database.ref("/polls/").on("child_added", snap => {
		const val = snap.val();
		const poll = Object.keys(val)[0];

		store.dispatch({
			type: "ADD_POLL",
			id: val[poll].id,
			creator: val[poll].creator,
			poll: poll,
			options: val[poll].options
		})
	})