import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import axios from "axios";
import io from "socket.io-client";

import createStoreWithMiddleWareAndDatabase from "./src/store.js";
import App from "./components/App.jsx";
import createDatabase from "./src/database.js";
import addEventListeners from "./src/event_listeners";
import {getCredentials, getUser} from "./src/authorization";
import "./scss/styles.scss";

const socket = io();

socket.on("config", data => {
	const {config, user} = data;
	const database = createDatabase(config);
	const store = createStoreWithMiddleWareAndDatabase(database);
	addEventListeners(store, database);
	user ? getUser(store, user) : getCredentials(store, socket);
	socket.on("data", store.dispatch);

	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>, 
		document.getElementById("app")
	);

})







