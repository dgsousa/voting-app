import React from "react";
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";

import Login from "./Login.jsx";

const NavBar = ({user}) =>
	<div className="navbar">
		<NavLink exact to="/" activeClassName="active"><span>Home</span></NavLink>
		{ user && <NavLink to="/mypolls" activeClassName="active"><span>My Polls</span></NavLink> }
		{ user && <NavLink to="/newpoll" activeClassName="active"><span>New Poll</span></NavLink> }
		<Login />
	</div>;


NavBar.PropTypes = {
	user: PropTypes.string.isRequired
};

export default NavBar;