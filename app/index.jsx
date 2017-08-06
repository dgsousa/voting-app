import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import axios from "axios";
import io from "socket.io-client";

import createStoreWithMiddleWareAndSocket from "./src/store.js";
import App from "./components/App.jsx";
import addEventListeners from "./src/event_listeners";
import {getCredentials} from "./src/authorization";
import "./scss/styles.scss";



const socket = io();

const store = createStoreWithMiddleWareAndDatabase(socket);
	
	//getCredentials(store, database);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById("app")
);











