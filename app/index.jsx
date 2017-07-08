import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import App from "./components/App.jsx";
import v4 from "uuid/v4";
import appReducer from "./reducers/reducer.jsx";
import {addedPollsEventListener} from "./event_listeners";
import "./scss/styles.scss";


 



const initialData = {
	
	polls: {
		
		countries: {
			id: v4(),
			creator: "alpha",
			voted: {},
			options: {
				"United States": 0,
				"Mexico": 0,
				"Canada": 0
			}
		},
		
		colors: {
			id: v4(),
			creator: "beta",
			voted: {},
			options: {
				"red": 0,
				"green": 0,
				"yellow": 0
			}
		}
	},

	user: "alpha"
}
	


const createStoreWithMiddleWare = compose(
	applyMiddleware(thunk), 
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore);

const store = createStoreWithMiddleWare(appReducer);

addedPollsEventListener(store);


ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>, 
	document.getElementById("app")
);






