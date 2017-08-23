import * as firebase from "firebase";


export const redirectToLogin = () => {
	const provider = new firebase.auth.GithubAuthProvider();
	firebase.auth().signInWithRedirect(provider);
}

export const getCredentials = async (store) => {
	const dispatch = store.dispatch;
	try {
		const result = await firebase.auth().getRedirectResult();
		result.user && dispatch({type: "SET_USER", user: result.user.displayName})
	} catch(err) {
		console.log("error", err.message);
	}
	dispatch({type: "LOADING", loading: false});
}
	

export const signOut = () => async (dispatch) => {
	try {
		await firebase.auth().signOut();
		dispatch({type: "SIGN_OUT"});
	} catch(err) {
		console.log("error", err.message);
	}
}

