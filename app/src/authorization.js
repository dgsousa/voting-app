import * as firebase from "firebase";


export const redirectToLogin = () => {
	const provider = new firebase.auth.TwitterAuthProvider();
	firebase.auth().signInWithRedirect(provider);
}

export const getCredentials = async (store, config) => {
	const dispatch = store.dispatch;
	firebase.initializeApp(config);
	try {
		const result = firebase.auth().getRedirectResult();
		const user = result.user && result.user.displayName;
	} catch(err) {
		console.log("error", err.message);
	}
	firebase.auth().getRedirectResult().then(result => {
		if(result.credential) {
			dispatch({
				type: "SET_USER",
				user: result.user.displayName
			});
		}
		dispatch({ 
			type: "LOADING", 
			loading: false 
		});
	}).catch(error => {
		console.log("error", error.message);
	})
	
}
	

export const signOut = () => (dispatch) => {
	firebase.auth().signOut()
		.then(() => {
			dispatch({type: "SIGN_OUT"})
		})
		.catch(error => console.log(error.message));
}

