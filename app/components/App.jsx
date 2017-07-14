import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";




//components
import Home from "./Home.jsx";
import Header from "./Header.jsx";
import Poll from "./Poll.jsx";
import EnsureLoggedInContainer from "./EnsureLoggedInContainer.jsx";




let App = ({loading}) =>
	
	loading ? <div>{"...loading"}</div> :

	<Router>
		<div>
			<Route component={Header}/>
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route path="/polls/:id" component={Poll}/>
				<Route component={EnsureLoggedInContainer} />
			</Switch>
		</div>
	</Router>


const mapStateToProps = (state) => ({
	loading: state.loading
})


App = connect(mapStateToProps)(App);


export default App;