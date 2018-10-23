import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import io from "socket.io-client";


import createStoreWithMiddleWareAndSocket from "./src/store.js";
import App from "./components/App.jsx";
import {getCredentials} from "./src/authorization";
import "./scss/styles.scss";



const socket = io();
const store = createStoreWithMiddleWareAndSocket(socket);
socket.on("init", (initialData) => {
	const {config, user} = initialData;
	getCredentials(store, socket, config, user);
	socket.on("data", store.dispatch);
});


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById("app")
);











