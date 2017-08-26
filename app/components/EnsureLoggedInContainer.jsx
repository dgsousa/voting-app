import React from "react";
import {connect} from "react-redux";
import {Route, Redirect} from "react-router-dom";

//components
import MyPolls from "./MyPollsComponents/MyPolls.jsx";
import NewPollContainer from "./NewPollComponents/NewPoll.jsx";


let EnsureLoggedIn = ({user}) => user ? 
	<div>
		<Route path="/mypolls" component={MyPolls}/>
		<Route path="/newpoll" component={NewPollContainer}/>
	</div>	: 
	<Redirect to="/"/>;


const mapStateToProps = (state) => ({user: state.user});


const EnsureLoggedInContainer = connect(mapStateToProps)(EnsureLoggedIn);


export default EnsureLoggedInContainer;