"use strict";
import React from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {renderToString} from "react-dom/server";
import {StaticRouter as Router} from "react-router-dom";
import Routes from "../app/components/Routes.jsx";
import appReducer from "../app/reducers/reducer";


const setupInitialState = (snap, store) => {
	const val = snap.val();
	Object.keys(val).forEach(key =>
		store.dispatch({
			type: "ADD_POLL",
			id: key,
			...val[key]
		})
	);
	return JSON.stringify(store.getState());
}


const handleRender = (file, database) => async (req, res) => {
	const context = {};
	const store = createStore(appReducer);
	const snap = await database.ref("/polls/").once("value");
	const initialState = setupInitialState(snap, store);

	const reactComponent = renderToString(
		<Provider store={store}>
			<Router
				location={req.url}
				context={context}>
				<Routes />
			</Router>
		</Provider>
	)

	context.url ? 
		res.writeHead(302, { Location: 302 }) : 
		res.status(200).render(file, {reactComponent, initialState});
};


module.exports = handleRender;


