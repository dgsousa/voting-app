import * as firebase from "firebase";


export const redirectToLogin = () => {
	const provider = new firebase.auth.TwitterAuthProvider();
	firebase.auth().signInWithRedirect(provider);
}

export const getCredentials = (store) => {
	const dispatch = store.dispatch;
	dispatch({ 
		type: "LOADING", 
		loading: true 
	});
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





//offer multiple login methods
//persist login?
//