import React from "react";
import {connect} from "react-redux";
import {Route, Redirect} from "react-router-dom";
import PropTypes from "prop-types";

//components
import MyPolls from "./MyPollsComponents/MyPolls.jsx";
import NewPoll from "./NewPollComponents/NewPoll.jsx";


let EnsureLoggedIn = ({user}) => user ? 
	<div>
		<Route path="/mypolls" component={MyPolls}/>
		<Route path="/newpoll" component={NewPoll}/>
	</div>	: 
	<Redirect to="/"/>;


const mapStateToProps = (state) => ({user: state.user});



EnsureLoggedIn.PropTypes = {
	user: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(EnsureLoggedIn);