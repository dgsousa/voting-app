import * as firebase from "firebase";


export const redirectToLogin = () => {
	const provider = new firebase.auth.TwitterAuthProvider();
	firebase.auth().signInWithRedirect(provider);
}

export const getCredentials = async (store, socket, config) => {
	const {dispatch} = store;
	let user;
	firebase.initializeApp(config);
	try {
		const result = await firebase.auth().getRedirectResult();
		user = result.user && result.user.displayName || null;
	} catch(err) {
		console.log("error", err.message);
	}
	socket.emit("login", user);
}
	

export const signOut = () => async (dispatch, getState, socket) => {
	try {
		await firebase.auth().signOut();
	} catch(err) {
		console.log("error", err.message);
	}
	socket.emit("logout", null);
}

