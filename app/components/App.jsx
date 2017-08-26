import React from "react";
import {connect} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";

//components
import Routes from "./Routes.jsx";


let App = () => 
	
	<Router>
		<Routes />
	</Router>;


const mapStateToProps = (state) => ({loading: state.loading});


App = connect(mapStateToProps)(App);


export default App;