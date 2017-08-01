import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import Loader from "halogen/RingLoader";

//components
import Home from "./Home.jsx";
import Header from "./Header.jsx";
import Poll from "./Poll.jsx";
import EnsureLoggedInContainer from "./EnsureLoggedInContainer.jsx";




let App = ({loading}) =>
	
	loading ? 

	<div className="spinner">
		<Loader size="100px" color="#432958" margin="10px"/>
	</div> :

	<Router>
		<div>
			<Route component={Header}/>
			<div className="main">
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route path="/polls/:id" component={Poll}/>
					<Route component={EnsureLoggedInContainer} />
				</Switch>
			</div>
		</div>
	</Router>


const mapStateToProps = (state) => ({
	loading: state.loading
})


App = connect(mapStateToProps)(App);


export default App;