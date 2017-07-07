import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import App from "./components/App.jsx";
import v4 from "uuid/v4";
import appReducer from "./reducers/reducer.jsx";
import "./scss/styles.scss";



console.log({
	[v4()]: "test"
})



const initialData = {
	
	polls: {
		
		countries: {
			creator: "alpha",
			id: v4(),
			voted: {},
			options: {
				"United States": 0,
				"Mexico": 0,
				"Canada": 0
			}
		},
		
		colors: {	
			creator: "beta",
			id: v4(),
			voted: {},
			options: {
				"red": 0,
				"green": 0,
				"yellow": 0
			}
		}
	}
}
	


const createStoreWithMiddleWare = compose(
	applyMiddleware(thunk), 
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore);

const store = createStoreWithMiddleWare(appReducer, initialData);


ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>, 
	document.getElementById("app")
);






