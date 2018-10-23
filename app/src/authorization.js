import * as firebase from "firebase";


export const redirectToLogin = () => {
	const provider = new firebase.auth.TwitterAuthProvider();
	firebase.auth().signInWithRedirect(provider);
};

export const getCredentials = async (store, socket, config, sessionUser) => {
	try {
		firebase.initializeApp(config);
		if(sessionUser) return store.dispatch({type: "SET_USER", user: sessionUser});
		const result = await firebase.auth().getRedirectResult();
		const user = result.user && result.user.displayName || null;
		socket.emit("login", user);
	} catch(err) {
		throw err;
	}
};

export const signOut = () => async (dispatch, getState, socket) => {
	try {
		await firebase.auth().signOut();
	} catch(err) {
		throw err;
	}
	socket.emit("logout", null);
};

