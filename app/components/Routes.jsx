import React from "react";
import { Route, Switch} from "react-router-dom";


//components
import Home from "./HomeComponents/Home.jsx";
import Header from "./HeaderComponents/Header.jsx";
import Poll from "./PollComponents/Poll.jsx";
import EnsureLoggedIn from "./EnsureLoggedIn.jsx";


const Routes = () =>
	<div>
		<Route component={Header}/>
		<div className="main">
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route path="/polls/:id" component={Poll}/>
				<Route component={EnsureLoggedIn} />
			</Switch>
		</div>
	</div>;


export default Routes;