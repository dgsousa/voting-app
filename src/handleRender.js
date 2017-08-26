"use strict";
import React from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {renderToString} from "react-dom/server";
import {StaticRouter as Router} from "react-router-dom";
import Routes from "../app/components/Routes.jsx";
import appReducer from "../app/reducers/reducer";

const handleRender = (file) => (req, res) => {
	const context = {};

	const store = createStore(appReducer);

	const reactComponent = renderToString(
		<Provider store={store}>
			<Router
				location={req.url}
				context={context}>
				<Routes />
			</Router>
		</Provider>
	)

	if(context.url) {
		res.writeHead(302, { Location: 302 });
	} else {
		res.status(200).render(file, {reactComponent});
	}
};


module.exports = handleRender;
