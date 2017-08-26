import React from "react";
import {NavLink} from "react-router-dom";


import Login from "./Login.jsx";

const NavBar = ({user}) =>
	<div className="navbar">
		<NavLink exact to="/" activeClassName="active"><span>Home</span></NavLink>
		{ user && <NavLink to="/mypolls" activeClassName="active"><span>My Polls</span></NavLink> }
		{ user && <NavLink to="/newpoll" activeClassName="active"><span>New Poll</span></NavLink> }
		<Login />
	</div>;

export default NavBar;