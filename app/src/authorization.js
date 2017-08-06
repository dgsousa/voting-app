import * as firebase from "firebase";

const config = {
	apiKey: "AIzaSyCxwT2udbQFddsw-_zxoum0lJlJ1VR_rAg",
	authDomain: "voting-app-9a2b1.firebaseapp.com",
	databaseURL: "https://voting-app-9a2b1.firebaseio.com",
	projectId: "voting-app-9a2b1",
	messagingSenderId: "517098115982",
	storageBucket: "voting-app-9a2b1.appspot.com"
}

firebase.initializeApp(config);



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

