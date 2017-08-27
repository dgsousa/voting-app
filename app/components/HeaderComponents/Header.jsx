import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import Twitter from "./Twitter.jsx";
import NavBar from "./NavBar.jsx";



const Header = ({user, tweet}) => 
	<div className="header">
		<Twitter tweet={tweet}/>
		<NavBar user={user}/>
	</div>;


const mapStateToProps = (state, ownProps) => {
	const id = ownProps.location.pathname.slice(7);
	const tweet = id.length && state.polls[id] && encodeURIComponent(`${state.polls[id].topic} | localhost:3000/polls/${id}`);
	return {
		user: state.user,
		tweet: tweet
	};
};

Header.PropTypes = {
	user: PropTypes.string.isRequired,
	tweet: PropTypes.string.isRequired
};


export default connect(mapStateToProps)(Header); 


