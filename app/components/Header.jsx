import React from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

import Login from "./Login.jsx";



let Header = ({user}) => 
	<div className="header">
		<div className="navbar">
			<NavLink to="/">Home</NavLink>
			{ user && <NavLink to="/mypolls">My Polls</NavLink> }
			{ user && <NavLink to="/newpoll">New Poll</NavLink> }
			<Login />
		</div>
	</div>


const mapStateToProps = (state) => ({
	user: state.user
})


Header = connect(mapStateToProps)(Header); 


export default Header;