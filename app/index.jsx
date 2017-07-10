import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import App from "./components/App.jsx";
import * as firebase from "firebase";
import v4 from "uuid/v4";
import appReducer from "./reducers/reducer.jsx";
import addEventListeners from "./event_listeners";
import "./scss/styles.scss";


const provider = new firebase.auth.GithubAuthProvider();



firebase.auth().signInWithRedirect(provider).then(result => {
	console.log(result.credential.accessToken);
})

const createStoreWithMiddleWare = compose(
	applyMiddleware(thunk), 
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore);

const store = createStoreWithMiddleWare(appReducer);

addEventListeners(store);

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>, 
	document.getElementById("app")
);






