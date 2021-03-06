import React from "react";
import {NavLink, withRouter} from "react-router-dom";
import {connect} from "react-redux";


import Twitter from "./Twitter.jsx";
import NavBar from "./NavBar.jsx";



let Header = ({user, tweet}) => 
	<div className="header">
		<Twitter tweet={tweet}/>
		<NavBar user={user}/>
	</div>


const mapStateToProps = (state, ownProps) => {
	const id = ownProps.location.pathname.slice(7);
	const tweet = id.length && state.polls[id] && encodeURIComponent(`${state.polls[id].topic} | localhost:3000/polls/${id}`);
	return {
		user: state.user,
		tweet: tweet
	}
}


Header = withRouter(connect(mapStateToProps)(Header)); 


export default Header;