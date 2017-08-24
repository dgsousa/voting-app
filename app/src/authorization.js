import * as firebase from "firebase";


export const redirectToLogin = () => {
	const provider = new firebase.auth.GoogleAuthProvider();
	firebase.auth().signInWithRedirect(provider);
};

export const getCredentials = async (store, socket) => {
	const {dispatch} = store;
	try {
		const result = await firebase.auth().getRedirectResult();
		const user = result.user && result.user.displayName;
		dispatch({type: "SET_USER", user});
		socket.emit("login", user);
	} catch(err) {
		console.log("error", err.message);
	}
	dispatch({type: "LOADING"});
};

// export const getSession = store => {
// 	console.log("getSession")
// 	const {dispatch} = store;
// 	const {user} = sessionStorage;
// 	dispatch({type: "SET_USER", user});
// 	dispatch({type: "LOADING"});
// }
	

export const signOut = () => async (dispatch) => {
	try {
		await firebase.auth().signOut();
		dispatch({type: "SIGN_OUT"});
	} catch(err) {
		console.log("error", err.message);
	}
};

