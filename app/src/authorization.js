import * as firebase from "firebase";


export const redirectToLogin = () => {
	const provider = new firebase.auth.GoogleAuthProvider();
	firebase.auth().signInWithRedirect(provider);
};

export const getCredentials = async (store, socket) => {
	console.log("getCredentials");
	const {dispatch} = store;
	try {
		const result = await firebase.auth().getRedirectResult();
		const user = result.user && result.user.displayName;
		socket.emit("login", user);
	} catch(err) {
		console.log("error", err.message);
	}
	dispatch({type: "LOADING"});
};

export const getUser = (store, user) => {
	console.log("getUser");
	const {dispatch} = store;
	dispatch({type: "SET_USER", user});
	dispatch({type: "LOADING"});
}
	

export const signOut = () => async (dispatch) => {
	try {
		await firebase.auth().signOut();
		socket.emit("logout", null);
	} catch(err) {
		console.log("error", err.message);
	}
};

