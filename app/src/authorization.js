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
		const user = result.user && result.user.displayName || null;
		socket.emit("login", user);
	} catch(err) {
		console.log("error", err.message);
	}

	dispatch({type: "LOADING"});
	
}
	

export const signOut = () => (dispatch) => {
	firebase.auth().signOut()
		.then(() => {
			dispatch({type: "SIGN_OUT"})
		})
		.catch(error => console.log(error.message));
}

